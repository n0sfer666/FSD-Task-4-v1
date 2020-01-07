export class Model implements I_Model {

    current_value: T_Slider_Value;
    current_position: T_Slider_Value;
    new_value: T_Slider_Value;
    new_position: T_Slider_Value;

    constructor(public readonly configuration: I_Configuration) {

        if(!Array.isArray(this.configuration.start)) {

            this.current_value = this.configuration.start;
            this.new_value = this.current_value;
            this.current_position = this.value_to_position(this.current_value);
            this.new_position = this.current_position;

        } else {

            this.current_value = this.configuration.start;
            this.new_value = this.current_value;
            this.current_position = this.value_to_position(this.current_value);
            this.new_position = this.current_position;

        }

        
    }


    value_to_position(value: T_Slider_Value): T_Slider_Value {

        let range: [number, number] = this.configuration.range;
        let result: T_Slider_Value = Array.isArray(value)
            ? [ (value[0] - range[0])/(range[1] - range[0]),
                (value[1] - range[0])/(range[1] - range[0]) ]
            : (value - range[0])/(range[1] - range[0]);

        return result;
    }

    position_to_value(position: T_Slider_Value): T_Slider_Value {

        let range: [number, number] = this.configuration.range;
        let result: T_Slider_Value = Array.isArray(position)
            ? [ ( position[0] * ( range[1] - range[0] ) ) + range[0], 
                ( position[1] * (range[1] - range[0] ) ) + range[0] ] 
            : position * (range[1] - range[0]) + range[0];

        return result;
    }

    get_new_current_value(new_value: T_Slider_Value, current_value: T_Slider_Value): T_Slider_Value {

        let step: number = this.configuration.step;
        let range: [number, number] = this.configuration.range;
        let result_value: T_Slider_Value;

        if( Array.isArray( new_value ) && Array.isArray( current_value ) ) {

            result_value = [0, 0];

            let boundary: [ { min: number, max: number} , { min: number, max: number } ]
                        = [ { min: 0, max: 0 }, { min: 0, max: 0 } ];
            
            boundary[0].min = current_value[0] - step > range[0]
                            ? current_value[0] - step
                            : range[0];

            boundary[0].max = current_value[0] + step < current_value[1]
                            ? current_value[0] + step
                            : current_value[0];

            boundary[1].min = current_value[1] - step > current_value[0]
                            ? current_value[1] - step
                            : current_value[1];

            boundary[1].max = current_value[1] + step < range[1]
                            ? current_value[1] + step
                            : range[1];

            for( let i = 0; i < new_value.length; i++ ) {

                if( new_value[i] <= boundary[i].min ) {

                    result_value[i] = boundary[i].min;

                } else {

                    result_value[i] =  current_value[i];

                } if( new_value[i] >= boundary[i].max ) {

                    result_value[i] = boundary[i].max;

                } else {

                    result_value[i] =  current_value[i];
                }
            }

            return result_value;
        } else {

            result_value = current_value;

            let boundary: { min: number, max: number }
                        = { min: 0, max: 0 };

            if( !Array.isArray( new_value ) && !Array.isArray( current_value ) ) {
                boundary.min = current_value - step > range[0]
                                ? current_value - step
                                : range[0];

                boundary.max = current_value + step < range[1]
                                ? current_value + step
                                : range[1];
                
                if( new_value <= boundary.min ) {

                    result_value = boundary.min;

                } else {

                    result_value =  current_value;

                } if( new_value >= boundary.max ) {

                    result_value = boundary.max;

                } else {

                    result_value =  current_value;
                }

                return result_value;

            } else {

                return result_value;
            }

        }
    }
}