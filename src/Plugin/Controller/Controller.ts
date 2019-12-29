import { View } from "../View/View";
import { Model } from "../Model/Model";

export class Controller {

    private is_drawn: boolean = false;

    constructor(private model: Model, private view: View) {

        if( !this.is_drawn ) {
            // this.view.draw_slider(
            //     this.model.orientation,
            //     this.model.current_position,
            //     this.model.current_value );

            this.is_drawn = true;
        };
        console.log(this.model);
        console.log(this.view);
    }
}