export class Shortcut {

    create_element_with_class( css_class: T_View_Classes, orientation: T_Slider_Orientation ): HTMLElement {
        let str_class: string = 'SRS__' + css_class;
        let css_class_without_orientation: string = str_class + ' ' + str_class + '_';
        let element: HTMLElement = document.createElement('div');
        element.setAttribute('class', (css_class_without_orientation + orientation) );
        return element;
    }

}