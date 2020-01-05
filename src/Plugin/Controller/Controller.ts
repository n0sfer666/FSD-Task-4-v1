import { View } from "../View/View";
import { Model } from "../Model/Model";

export class Controller {

    private is_drawn: boolean = false;
    private current_position: T_Slider_Value;
    private current_value: T_Slider_Value;

    constructor(private model: Model, private view: View) {

        this.current_position = this.model.current_position;
        this.current_value = this.model.current_value;

        if( !this.is_drawn ) {

            this.view.draw( this.model.configuration.connect,
                            this.model.configuration.tooltip,
                            this.model.configuration.orientation,
                            this.current_position,
                            this.current_value );

            this.is_drawn = true;
        };

        if(this.is_drawn) {

            this.view.move();
            setInterval(this.management, 50);
        }
    }

    management() {
        
    }
}