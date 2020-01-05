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

            this.view.move();
            setInterval(this.management, 50);
        }
    }

    management() {
        if( Array.isArray( this.model.current_position ) ) {
            this.model.current_position.forEach( ( item, index ) => {
                if( Array.isArray( this.view.slider.thumbler.element ) ) {
                    item = Number( this.view.slider.thumbler.element[index].dataset['position'] );
                }
            })
        } else {
            if( !Array.isArray( this.view.slider.thumbler.element )
                && this.view.slider.thumbler.element ) {
                this.model.current_position = Number( this.view.slider.thumbler.element.dataset['position'] );
            }
        }
        console.log(this.model.current_position);   
    }
}