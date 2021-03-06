import { Shortcut } from "../_shortcut/Shortcut";

export class Thumbler extends Shortcut {

    element?: T_View_Thumbler_or_Tooltip;
    private orientation: T_Slider_Orientation = 'horizontal';
    private current_position?: T_Slider_Value;
    private is_drawn: boolean = false;

    draw_thumbler(orientation: T_Slider_Orientation, position: T_Slider_Value) {

        this.orientation = orientation;

        if( !this.is_drawn ) {

            this.element = Array.isArray(position)
                ? this.create_tooltip_or_thumbler(true, false, orientation)
                : this.create_tooltip_or_thumbler(true, true, orientation);

            this.set_new_position(position);

            this.is_drawn = true;
        }
    }

    get_new_position(container: HTMLElement) {
        if(this.element) {

            if( Array.isArray( this.element ) ) {
                this.element.forEach( (item) => {
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
        
        let orientation: T_Slider_Orientation = this.orientation;

        element.addEventListener('mousedown', (event: MouseEvent) => {
            event.preventDefault();
            
            let shift: number = this.get_shift(element, event);

            document.addEventListener('mousemove', on_mouse_move, false);
            document.addEventListener('mouseup', on_mouse_up, false);

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
        }, false)
        
    }

    set_new_position(position: T_Slider_Value) {

        if( this.current_position === undefined || this.current_position !== position ) {

            if( Array.isArray( this.element ) && Array.isArray( position ) ) {

                let style: string[] = this.orientation === 'horizontal'
                    ? [ 'transform: translateX(' + (position[0] * 1000) + '%)', 
                        'transform: translateX(' + (position[1] * 1000) + '%)' ]
                    : [ 'transform: translateY(' + (position[0] * 1000) + '%)', 
                        'transform: translateY(' + (position[1] * 1000) + '%)' ];

                this.element.forEach((item, index) => {

                    item.setAttribute('style', style[index]);
                    item.dataset['position'] = String(position[index]);

                })
                
            } else if( !Array.isArray( this.element ) && !Array.isArray( position ) && this.element ) {

                let style: string = this.orientation === 'horizontal'
                    ? 'transform: translateX(' + (position * 1000) + '%)'
                    : 'transform: translateY(' + (position * 1000) + '%)';

                this.element.setAttribute('style', style);
                this.element.dataset['position'] = String(position);
            }
        }
    }
}