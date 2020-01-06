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

        // result = Array.isArray(result)
        //     ? [Math.c]

        return result;
    }

    position_to_value(position: T_Slider_Value): T_Slider_Value {

        let range: [number, number] = this.configuration.range;
        let result: T_Slider_Value = Array.isArray(position)
            ? [ ( position[0] * ( range[1] - range[0] ) ) + range[0], 
                ( position[1] * (range[1] - range[0] ) ) + range[0] ] 
            : position * (range[1] - range[0]) + range[0];
        // console.log('result: ' + result);
        return result;
    }

    is_move_thumbler() {

        this.new_value = this.position_to_value(this.new_position);
        let boundary: [number, number];

        if( Array.isArray( this.new_value ) 
        && Array.isArray( this.current_value ) ) {

            let index_of_changed_value: number = 0;
            for( let i = 0; i < this.new_value.length; i++ ) {
                if( this.new_value[i] !== this.current_value[i] ) {

                    index_of_changed_value = i;
                }
            }

            boundary = this.set_boundary(index_of_changed_value);

            if( this.new_value[index_of_changed_value] <= boundary[0] ) {

                this.current_value[index_of_changed_value] = boundary[0];
                this.current_position = this.value_to_position(this.current_value);

                
            }

            // console.log('index:' + index_of_changed_value);

        } else {

            boundary = this.set_boundary();

        }

        
        // console.log(boundary);
    }

    set_boundary(index_of_changed_value?: number): [number, number] {

        let result: [number, number] = this.configuration.range;
        let step: number = this.configuration.step;
        let range: [number, number] = this.configuration.range;

        if( index_of_changed_value === undefined ) {

            if( !Array.isArray( this.current_value ) ) {
                
                result[0] = this.current_value - step >= range[0]
                            ? this.current_value - step
                            : range[0];

                result[1] = this.current_value + step <= range[1]
                            ? this.current_value + step
                            : range[1];

                return result;

            } else {

                return result;
            }

        } else {

            if( Array.isArray( this.current_value ) ) {

                if( index_of_changed_value === 0 ) {

                    result[0] = this.current_value[0] - step >= range[0]
                                ? this.current_value[0] - step
                                : range[0];

                    result[1] = this.current_value[0] + step <= this.current_value[1]
                                ? this.current_value[0] + step
                                : this.current_value[0];

                    return result;

                } else {

                    result[0] = this.current_value[0] - step >= this.current_value[0]
                                ? this.current_value[0] - step
                                : this.current_value[0];

                    result[1] = this.current_value[0] + step <= range[1]
                                ? this.current_value[0] + step
                                : range[1];

                    return result;

                }

            } else {

                return result;
            }

        }

    }

}