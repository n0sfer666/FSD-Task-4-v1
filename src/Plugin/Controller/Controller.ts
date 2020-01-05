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

            setInterval(() => {
                if( Array.isArray( this.model.current_position )
                    && Array.isArray ( this.view.slider.thumbler.element ) ) {
                        
                        this.model.current_position[0] = Number( this.view.slider.thumbler.element[0].dataset['position' ] );
                        this.model.current_position[1] = Number( this.view.slider.thumbler.element[1].dataset['position' ] );  

                } else if( !Array.isArray( this.view.slider.thumbler.element )
                            && this.view.slider.thumbler.element ) {
                                
                        this.model.current_position = Number( this.view.slider.thumbler.element.dataset['position'] );

                    }
            }, 1500);
        }
    }
}