import { Shortcut } from "../_shortcut/Shortcut";

export class Connect extends Shortcut {

    element?: HTMLElement;
    orientation: T_Slider_Orientation = 'horizontal';
    private is_drawn: boolean = false;

    draw_connect( is_draw: boolean, orientation?: T_Slider_Orientation, position?: T_Slider_Value ) {

        if( !is_draw || this.is_drawn || orientation === undefined || position === undefined) {
            return undefined;
        }

        this.orientation = orientation;

        this.element = this.create_element_with_class('connect', orientation);

        this.set_new_position(position);

        this.is_drawn = true;

    }

    set_new_position( position: T_Slider_Value ) {

        let style: string = Array.isArray( position )
            ? this.orientation === 'horizontal'
                ? 'left: ' + (position[0] * 100) + '%; width: ' + ( (position[1] - position[0]) * 100) + '%;'
                : 'top: ' + (position[0] * 100) + '%; height: ' + ( (position[1] - position[0]) * 100) + '%;'
            : this.orientation === 'horizontal'
                ? 'width: ' + position * 100 + '%;'
                : 'height: ' + position * 100 + '%;';

        if( this.element ) {
            this.element.setAttribute('style', style);
        }
    }
}