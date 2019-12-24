export class Model implements I_Model {

    // readonly is_single_thumbler: boolean;
    readonly orientation: T_Slider_Orientation;
    current_value: T_Slider_Value;
    current_position: T_Slider_Value;

    constructor(private configuration: I_Configuration) {

        this.orientation = this.configuration.orientation;

        if(!Array.isArray(this.configuration.start)) {
            // this.is_single_thumbler = true;
            this.current_value = this.configuration.start;
            this.current_position = this.value_to_position(this.current_value);
        } else {
            // this.is_single_thumbler = false;
            this.current_value = this.configuration.start;
            this.current_position = [this.value_to_position(this.current_value[0]), this.value_to_position(this.current_value[1])];
        }

    }

    value_to_position(value: number): number {

        let range: [number, number] = this.configuration.range;
        let result: number = (value - range[0])/(range[1] - range[0]);

        return result;
    }
}