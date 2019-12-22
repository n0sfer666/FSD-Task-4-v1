interface I_Configuration {
    readonly orientation: T_Slider_Orientation; 
    readonly start: T_Slider_Value;
    readonly range: T_Array_with_Couple_of_Numbers;
    readonly step: number;
    readonly connect: boolean;
    readonly tooltip: boolean;
}

type T_Array_with_Couple_of_Numbers = [number, number];
type T_Slider_Orientation = 'horizontal' | 'vertical';
type T_Slider_Value = number | T_Array_with_Couple_of_Numbers;