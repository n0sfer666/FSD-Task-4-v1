import { Shortcut } from "../_shortcut/Shortcut";

export class Tooltip extends Shortcut {

    element?: T_View_Thumbler_or_Tooltip;
    private is_drawn: boolean = false;

    draw_tooltip(is_draw: boolean, orientation?: T_Slider_Orientation, current_value?: T_Slider_Value) {

        if(!is_draw || orientation === undefined || current_value === undefined || this.is_drawn) {
            return undefined;
        } 

        this.element = Array.isArray( current_value )
            ? this.create_tooltip_or_thumbler(false, false, orientation)
            : this.create_tooltip_or_thumbler(false, true, orientation);
        
        this.set_innerText_tooltip(current_value);

        this.is_drawn = true;
    }
    
    set_innerText_tooltip(current_value: T_Slider_Value) {
        if( Array.isArray( this.element ) && Array.isArray( current_value ) ) {
            
            this.element.forEach((item, index) => {

                item.innerText = String( current_value[index] );

            })
        }
        if( !Array.isArray( this.element ) && !Array.isArray( current_value ) && this.element ) {

            this.element.innerHTML = String( current_value );

        }
    }
}