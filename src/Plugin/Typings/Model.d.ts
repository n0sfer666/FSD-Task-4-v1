interface I_Model {

    current_value: T_Slider_Value;
    current_position: T_Slider_Value;

    
    value_to_position(value: number): number;
}