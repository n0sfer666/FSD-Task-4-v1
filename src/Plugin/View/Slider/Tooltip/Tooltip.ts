import { Shortcut } from "../_shortcut/Shortcut";

export class Tooltip extends Shortcut {

    tooltip?: T_View_Thumbler_or_Tooltip;

    draw_tooltip(is_draw: boolean, is_single?: boolean, orientation?: T_Slider_Orientation, current_value?: T_Slider_Value): undefined {
        if(!is_draw) {
            return undefined;
        } 
        this.tooltip = is_single
            ? orientation === 'horizontal'
                ? this.create_element_with_class('tooltip', 'horizontal')
                : this.create_element_with_class('tooltip', 'vertical')
            : orientation === 'horizontal'
                ? [ this.create_element_with_class('tooltip', 'horizontal'), this.create_element_with_class('tooltip', 'horizontal') ]
                : [ this.create_element_with_class('tooltip', 'vertical'), this.create_element_with_class('tooltip', 'vertical') ];
        if( Array.isArray( this.tooltip ) && Array.isArray( current_value ) )  {
            this.tooltip.forEach( (item, index) => {
                item.innerText = String(current_value[index]);
            });
        } else if( !Array.isArray( this.tooltip ) ) {
            this.tooltip.innerText = String(current_value);
        }
    }
}