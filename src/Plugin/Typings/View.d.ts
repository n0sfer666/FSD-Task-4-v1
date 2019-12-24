interface I_View {

    readonly is_single_thumbler?: boolean;
    current_value?: T_Slider_Value;
    current_position?: T_Slider_Value;

    slider?: HTMLElement;
    thumbler?: HTMLElement | [HTMLElement, HTMLElement];
    connect?: HTMLElement;
    tooltip?: HTMLElement | [HTMLElement, HTMLElement];
    tooltip_bar?: HTMLElement;

    
    draw_slider(is_single_thumbler: boolean,orientation: T_Slider_Orientation, current_position: T_Slider_Value, current_value?: T_Slider_Value): void
}