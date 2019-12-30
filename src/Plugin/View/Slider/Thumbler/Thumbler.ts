import { Shortcut } from "../_shortcut/Shortcut";

export class Thumbler extends Shortcut {

    thumbler?: T_View_Thumbler_or_Tooltip;
    private is_drawn: boolean = false;

    draw_thumbler(orientation: T_Slider_Orientation, current_position: T_Slider_Value, current_value: T_Slider_Value) {
        if( !this.is_drawn ) {

            this.thumbler = Array.isArray(current_value) && Array.isArray(current_position)
                ? this.create_tooltip_or_thumbler(true, false, orientation)
                : this.create_tooltip_or_thumbler(true, true, orientation);

            if( Array.isArray( this.thumbler ) && Array.isArray( current_position ) ) {

                let style: string[] = orientation === 'horizontal'
                    ? [ 'transform: translateX(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateX(' + (current_position[1] * 1000) + '%)' ]
                    : [ 'transform: translateY(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateY(' + (current_position[1] * 1000) + '%)' ];

                this.thumbler.forEach((item, index) => {
                    item.setAttribute('style', style[index]);
                })
            } else if( !Array.isArray( this.thumbler ) && !Array.isArray( current_position ) ) {

                let style: string = orientation === 'horizontal'
                    ? 'transform: translateX(' + (current_position * 1000) + '%)'
                    : 'transform: translateY(' + (current_position * 1000) + '%)';

                this.thumbler.setAttribute('style', style);
            }

            this.is_drawn = true;
        }
    }

}