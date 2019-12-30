import { Shortcut } from "../_shortcut/Shortcut";

export class Connect extends Shortcut {

    element?: HTMLElement;
    private is_drawn: boolean = false;

    draw_connect(is_draw: boolean, orientation?: T_Slider_Orientation, current_position?: T_Slider_Value) {

        if( !is_draw || this.is_drawn || orientation === undefined || current_position === undefined) {
            return undefined;
        }

        this.element = this.create_element_with_class('connect', orientation);

        let style: string = Array.isArray( current_position )
            ? orientation === 'horizontal'
                ? 'left: ' + (current_position[0] * 100) + '%; width: ' + ( (current_position[1] - current_position[0]) * 100) + '%;'
                : 'top: ' + (current_position[0] * 100) + '%; height: ' + ( (current_position[1] - current_position[0]) * 100) + '%;'
            : orientation === 'horizontal'
                ? 'width: ' + current_position * 100 + '%;'
                : 'height: ' + current_position * 100 + '%;';

        this.element.setAttribute('style', style);

    }

}