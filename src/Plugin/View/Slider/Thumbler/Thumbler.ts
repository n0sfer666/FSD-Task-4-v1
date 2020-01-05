import { Shortcut } from "../_shortcut/Shortcut";

export class Thumbler extends Shortcut {

    element?: T_View_Thumbler_or_Tooltip;
    private orientation?: T_Slider_Orientation;
    private is_drawn: boolean = false;

    draw_thumbler(orientation: T_Slider_Orientation, current_position: T_Slider_Value) {

        this.orientation = orientation;

        if( !this.is_drawn ) {

            this.element = Array.isArray(current_position)
                ? this.create_tooltip_or_thumbler(true, false, orientation)
                : this.create_tooltip_or_thumbler(true, true, orientation);

            if( Array.isArray( this.element ) && Array.isArray( current_position ) ) {

                let style: string[] = orientation === 'horizontal'
                    ? [ 'transform: translateX(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateX(' + (current_position[1] * 1000) + '%)' ]
                    : [ 'transform: translateY(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateY(' + (current_position[1] * 1000) + '%)' ];

                this.element.forEach((item, index) => {
                    item.setAttribute('style', style[index]);
                    item.dataset['position'] = String(current_position[index]);
                })
            } else if( !Array.isArray( this.element ) && !Array.isArray( current_position ) ) {

                let style: string = orientation === 'horizontal'
                    ? 'transform: translateX(' + (current_position * 1000) + '%)'
                    : 'transform: translateY(' + (current_position * 1000) + '%)';

                this.element.setAttribute('style', style);
                this.element.dataset['position'] = String(current_position);
            }

            this.is_drawn = true;
        }
    }

    move_thumbler(container: HTMLElement) {
        if(this.element) {

            if( Array.isArray( this.element ) ) {
                this.element.forEach( (item, index) => {
                    this.on_mouse_down(container, item);

                })
            } else {
                let item: HTMLElement = this.element && !Array.isArray(this.element)
                                        ? this.element
                                        : document.createElement('div');
                 
                this.on_mouse_down(container, item);
            }
        }
    }
// Secondary function
    get_shift(element: HTMLElement, event: MouseEvent): number {

        let result: number = this.orientation === 'horizontal'
            ? event.clientX - element.getBoundingClientRect().left
            : event.clientY - element.getBoundingClientRect().top;

        return result;
    }

    on_mouse_down(container: HTMLElement, element: HTMLElement) {

        let orientation: T_Slider_Orientation = this.orientation
                ? this.orientation
                : 'horizontal';

        element.onmousedown = (event: MouseEvent) => {
            event.preventDefault();

            let shift: number = this.get_shift(element, event);

            document.addEventListener('mousemove', on_mouse_move);
            document.addEventListener('mouseup', on_mouse_up);

            // 
            function on_mouse_move(event: MouseEvent) {
                let new_position: number;
                let new_position_in_percent: number;

                if(orientation === 'horizontal') {
                    new_position = event.clientX - shift - container.getBoundingClientRect().left;
                    new_position_in_percent = new_position / container.offsetWidth;
                } else {
                    new_position = event.clientY - shift - container.getBoundingClientRect().top;
                    new_position_in_percent = new_position / container.offsetHeight;
                }

                if( new_position_in_percent > 1 ) {
                    new_position_in_percent = 1;
                } else if ( new_position_in_percent < 0 ) {
                    new_position_in_percent = 0;
                }

                element.dataset['position'] = String(new_position_in_percent);
            }

            function on_mouse_up() {
                document.removeEventListener('mousemove', on_mouse_move);
                document.removeEventListener('mouseup', on_mouse_up);
            }
        }

    }

    
}