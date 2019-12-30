export class Shortcut {

    create_element_with_class( css_class: T_View_Classes, orientation: T_Slider_Orientation ): HTMLElement {
        let str_class: string = 'SRS__' + css_class;
        let css_class_without_orientation: string = str_class + ' ' + str_class + '_';
        let element: HTMLElement = document.createElement('div');
        element.setAttribute('class', (css_class_without_orientation + orientation) );
        return element;
    }

    create_tooltip_or_thumbler( is_thumbler: boolean, is_single: boolean, orientation: T_Slider_Orientation ) {
        let element: T_View_Thumbler_or_Tooltip;
        element = is_thumbler
            ? is_single
                ? this.create_element_with_class('thumbler', orientation)
                : [ this.create_element_with_class('thumbler', orientation), this.create_element_with_class('thumbler', orientation) ]
            : is_single
                ? this.create_element_with_class('tooltip', orientation)
                : [ this.create_element_with_class('tooltip', orientation), this.create_element_with_class('tooltip', orientation) ]

        return element;
    }

}