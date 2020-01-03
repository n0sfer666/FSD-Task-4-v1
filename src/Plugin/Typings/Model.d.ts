interface I_Model {

    current_value: T_Slider_Value;
    current_position: T_Slider_Value;

    value_to_position( value: T_Slider_Value ): void;
    position_to_value(position: T_Slider_Value): void;
}

interface I_Model_callback_position_or_value {
    (position_or_value: T_Slider_Value): void;
}