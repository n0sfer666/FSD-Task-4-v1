export class Model implements I_Model {

    current_value: T_Slider_Value;
    current_position: T_Slider_Value;

    constructor(public readonly configuration: I_Configuration) {

        if(!Array.isArray(this.configuration.start)) {

            this.current_value = this.configuration.start;
            this.current_position = this.value_to_position(this.current_value);

        } else {

            this.current_value = this.configuration.start;
            this.current_position = [this.value_to_position(this.current_value[0]),                             this.value_to_position(this.current_value[1])];

        }

    }

    value_to_position(value: number): number {

        let range: [number, number] = this.configuration.range;
        let result: number = (value - range[0])/(range[1] - range[0]);

        return result;
    }

    position_to_value(position: number): number {

        let range: [number, number] = this.configuration.range;
        let result: number = position * (range[1] - range[0]) + range[0];

        return result;
    }
}