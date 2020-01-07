import { View } from "../View/View";
import { Model } from "../Model/Model";

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

            // setInterval(() => {
            //     if( Array.isArray( this.model.new_position ) 
            //     && Array.isArray( this.view.slider.thumbler.element ) ) {

            //         for( let i = 0; i < this.model.new_position.length; i++ ) {

            //             this.model.new_position[i] = Number( this.view.slider.thumbler.element[i].dataset['position'] );
            //         }

            //     } else if( !Array.isArray( this.view.slider.thumbler.element )
            //                 && this.view.slider.thumbler.element ) {
                                
            //             this.model.new_position = Number( this.view.slider.thumbler.element.dataset['position'] );

            //     }

            //     this.model.new_value = this.model.position_to_value(this.model.new_position);
            //     this.model.current_value = this.model.get_new_current_value(this.model.new_value, this.model.current_value);

            //     this.model.current_position = this.model.value_to_position(this.model.current_value);
            //     // console.log(this.model.current_position);

            //     this.view.slider.thumbler.set_new_position(this.model.current_position);
            //     this.view.slider.tooltip.set_innerText_tooltip(this.model.current_value);
            //     this.view.slider.connect.set_new_position(this.model.current_position);
            // }, 150);
        }
    }
}