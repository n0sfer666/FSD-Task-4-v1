import { Shortcut } from "./_shortcut/Shortcut";

import { Tooltip } from "./Tooltip/Tooltip";
import { Thumbler } from "./Thumbler/Thumbler";
import { Connect } from "./Connect/Connect";

export class Slider extends Shortcut {

    tooltip: Tooltip;
    thumbler: Thumbler;
    connect: Connect;

    element?: HTMLElement
    private is_drawn: boolean = false;

    constructor() {
        super();
        this.tooltip = new Tooltip;
        this.thumbler = new Thumbler;
        this.connect = new Connect;
    }

    draw_slider(is_connect: boolean, is_tooltip: boolean, orientation: T_Slider_Orientation, current_position: T_Slider_Value, current_value?: T_Slider_Value) {
        if(this.is_drawn) {
            return undefined
        }

        this.element = this.create_element_with_class('slider', orientation);
    
        this.thumbler.draw_thumbler(orientation, current_position);
        if( Array.isArray( this.thumbler.element ) ) {
            this.element.append(this.thumbler.element[0], this.thumbler.element[1])
        } else if(this.thumbler.element) {
            this.element.append(this.thumbler.element)
        }

        if(is_connect) {
            this.connect.draw_connect(is_connect, orientation, current_position);
            if(this.element && this.connect.element) {
                this.element.append(this.connect.element);
            }
        }


        if(is_tooltip) {
            this.tooltip.draw_tooltip(is_tooltip, orientation, current_value);

            if( Array.isArray( this.thumbler.element ) ) {

                this.thumbler.element.forEach( ( item, index ) => {
                    if( Array.isArray( this.tooltip.element ) ) {
                        item.append(this.tooltip.element[index]);
                    }
                })

            } else if( !Array.isArray( this.tooltip.element ) ) {

                if( this.thumbler.element && this.tooltip.element ) {
                    this.thumbler.element.append(this.tooltip.element);
                }
            }
        }

        this.is_drawn = true;
    }

}