interface I_View {
}

type T_View_Array_with_Couple_HTMLElements = [HTMLElement, HTMLElement];
type T_View_Thumbler_or_Tooltip = HTMLElement | T_View_Array_with_Couple_HTMLElements;
type T_View_Classes = 'slider' | 'thumbler' | 'connect' | 'tooltip';