import { Slider } from './Slider/Slider';

export class View {

    slider: Slider;
    is_drawn: boolean = false;

    constructor(private container: HTMLElement) {

        this.slider = new Slider;
    }

    draw(is_connect: boolean, is_tooltip: boolean, orientation: T_Slider_Orientation, current_position: T_Slider_Value, current_value?: T_Slider_Value) {
        if(this.is_drawn) {
            return undefined;
        }
        this.slider?.draw_slider(is_connect, is_tooltip, orientation, current_position, current_value);
        if(this.slider?.element !== undefined) {
            this.container.append(this.slider?.element);
            this.is_drawn = true;
        }
    }

    get_new_position_of_thumbler() {
            this.slider.thumbler.get_new_position(this.container);
    }
}