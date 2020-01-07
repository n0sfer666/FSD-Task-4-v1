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

            if( Array.isArray( this.view.slider.thumbler.element ) ) {
                this.view.slider.thumbler.element.forEach( ( item ) => {
                    item.onmousedown = () => {
                        console.log('in controller - ok');
                    }
                })
            } else if( this.view.slider.thumbler.element ) {
                this.view.slider.thumbler.element.onmousedown = () => {
                    console.log('in controller - ok');
                }
            }
        }
    }
}