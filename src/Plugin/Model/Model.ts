export class Model implements I_Model {

    current_value: T_Slider_Value;
    current_position: T_Slider_Value;

    constructor(public readonly configuration: I_Configuration) {

        if(!Array.isArray(this.configuration.start)) {

            this.current_value = this.configuration.start;
            this.current_position = 0;
            this.value_to_position(this.current_value);

        } else {

            this.current_value = this.configuration.start;
            this.current_position = [0,0];
            this.value_to_position(this.current_value);   

        }

        
    }


    value_to_position(value: T_Slider_Value) {

        let range: [number, number] = this.configuration.range;
        let result: T_Slider_Value = Array.isArray(value)
            ? [ (value[0] - range[0])/(range[1] - range[0]),
                (value[1] - range[0])/(range[1] - range[0]) ]
            : (value - range[0])/(range[1] - range[0]);

        this.current_position = result;
    }

    position_to_value(position: T_Slider_Value) {

        let range: [number, number] = this.configuration.range;
        let result: T_Slider_Value = Array.isArray(position)
            ? [ position[0] * (range[1] - range[0]) + range[0], 
                position[1] * (range[1] - range[0]) + range[0] ] 
            : position * (range[1] - range[0]) + range[0];

        this.current_value = result;
    }
}