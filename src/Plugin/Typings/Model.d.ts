interface I_Model {
    // variables
    readonly is_single_thumbler: boolean;
    current_value: T_Slider_Value;
    current_position: T_Slider_Value;

    // functions
    value_to_position(value: number): number;
}