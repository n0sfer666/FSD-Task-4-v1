import { View } from "../View/View";
import { Model } from "../Model/Model";
import { Thumbler } from "../View/Slider/Thumbler/Thumbler";
import { Slider } from "../View/Slider/Slider";

export class Controller {

    private is_drawn: boolean = false;

    constructor(private model: Model, private view: View) {

        if( !this.is_drawn ) {

            this.view.draw( this.model.configuration.connect,
                            this.model.configuration.tooltip,
                            this.model.configuration.orientation,
                            this.model.current_position,
                            this.model.current_value );

            this.is_drawn = true;
        };

        if(this.is_drawn) {

            this.view.get_new_position_of_thumbler();

            if( Array.isArray( this.view.slider.thumbler.element ) ) {

                this.view.slider.thumbler.element.forEach( ( item, index ) => {

                    this.on_mouse_down( this.model, this.view.slider, item, index );

                })
                
            } else if( this.view.slider.thumbler.element ) {

                let item: HTMLElement = this.view.slider.thumbler.element;

                this.on_mouse_down( this.model, this.view.slider, item )

            }
        }
    }

    on_mouse_down(model: Model, slider: Slider, element: HTMLElement, index?: number) {
        element.addEventListener('mousedown', (event: MouseEvent) => {
            
            event.preventDefault();

            document.addEventListener('mousemove', on_mouse_move, false);
            document.addEventListener('mouseup', on_mouse_up, false);

            function on_mouse_move() {

                if( Array.isArray( model.new_position ) ) {

                    if( index !== undefined ) {

                        model.new_position[index] = Number( element.dataset['position'] );

                        change_state();
                       
                    }

                } else {

                    model.new_position = Number( element.dataset['position'] );

                    change_state();
                                        
                }

                function change_state() {

                    model.new_value = model.position_to_value(model.new_position);

                    // console.log('n_val: ' + model.new_value);
                    // console.log('n_pos: ' + model.new_position);
                    // all right!
                    model.current_value = model.get_new_current_value(model.new_value, model.current_value);
                    model.current_position = model.value_to_position(model.current_value);

                    // console.log('c_val: ' + model.current_value);
                    // console.log('c_pos: ' + model.current_position);

                    slider.thumbler.set_new_position(model.current_position);
                    if( slider.connect.element ) {
                        slider.connect.set_new_position(model.current_position);
                    }
                    if( slider.tooltip.element ) {
                        slider.tooltip.set_innerText_tooltip(model.current_value);
                    }

                }

            }

            function on_mouse_up() {
                document.removeEventListener('mousemove', on_mouse_move);
                document.removeEventListener('mouseup', on_mouse_up);
            }

        }, false)
    }
}