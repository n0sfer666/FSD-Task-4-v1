interface I_Configuration {
    readonly orientation: T_Configuration_Orientation; 
    readonly start: T_Confuguration_Start;
    readonly range: T_Array_with_Couple_of_Numbers;
    readonly step: number;
    readonly connect: boolean;
    readonly tooltip: boolean;
}

type T_Array_with_Couple_of_Numbers = [number, number];
type T_Configuration_Orientation = 'horizontal' | 'vertical';
type T_Confuguration_Start = number | T_Array_with_Couple_of_Numbers;