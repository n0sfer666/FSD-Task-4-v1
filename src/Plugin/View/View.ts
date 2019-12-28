export class View {

    current_value?: T_Slider_Value;
    current_position?: T_Slider_Value;

    slider?: HTMLElement;
    thumbler?: HTMLElement | [HTMLElement, HTMLElement];
    connect?: HTMLElement;
    tooltip?: HTMLElement | [HTMLElement, HTMLElement];
    tooltip_bar?: HTMLElement;

    constructor(private container: HTMLElement) {

        // tmp
        console.log(this.container);
    }

    draw_slider(orientation: T_Slider_Orientation, current_position: T_Slider_Value, current_value: T_Slider_Value): void {
        
        let css_class_slider: string = 'SRS__slider';
        let css_class_thumbler: string = 'SRS__thumbler';
        let css_class_connect: string = 'SRS__connect';
        let css_class_tooltip: string = 'SRS__tooltip';

        if( orientation === 'horizontal' ) {

            css_class_slider += ' SRS__slider_horizontal';
            css_class_thumbler += ' SRS__thumbler_horizontal';
            css_class_connect += ' SRS__connect_horizontal';
            css_class_tooltip += ' SRS__tooltip_horizontal';

        } else {
            
            css_class_slider += ' SRS__slider_vertical';
            css_class_thumbler += ' SRS__thumbler_vertical';
            css_class_connect += ' SRS__connect_vertical';
            css_class_tooltip += ' SRS__tooltip_vertical';
            
        }

        this.slider = document.createElement('div');
        this.slider.setAttribute('class', css_class_slider);

        this.connect = document.createElement('div');
        this.connect.setAttribute('class', css_class_connect);

        if( !Array.isArray(current_value) && !Array.isArray(current_position) ) {

            this.thumbler = document.createElement('div');
            this.thumbler.setAttribute('class', css_class_thumbler);
            let thumbler_style: string = orientation === 'horizontal'
                ? 'transform: translateX(' + (current_position * 1000) + '%)'
                : 'transform: translateY(' + (current_position * 1000) + '%)';
            this.thumbler.setAttribute('style', thumbler_style);

            this.tooltip = document.createElement('div');
            this.tooltip.setAttribute('class', css_class_tooltip);
            this.tooltip.innerText = String(current_value);
            this.thumbler.append(this.tooltip);

            let connect_style: string = orientation === 'horizontal'
                ? 'width: ' + current_position * 100 + '%;'
                : 'height: ' + current_position * 100 + '%;';
            this.connect.setAttribute('style', connect_style);

            this.slider.append(this.thumbler);

        } else {

            this.thumbler = [ document.createElement('div'), document.createElement('div') ];
            
            this.tooltip = [ document.createElement('div'), document.createElement('div') ];
            this.tooltip.forEach( (item, index) => {
                item.setAttribute('class', css_class_tooltip);
                if( Array.isArray(current_value) ) {
                    item.innerText = String(current_value[index]);
                }
        } );

            let thumbler_style: [string, string] = Array.isArray(current_position) 
                ? orientation === 'horizontal'
                    ? [ 'transform: translateX(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateX(' + (current_position[1] * 1000) + '%)' ]
                    : [ 'transform: translateY(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateY(' + (current_position[1] * 1000) + '%)' ]
                : ['', ''];
            this.thumbler.forEach( (item, index) => {
                item.setAttribute('class', css_class_thumbler);
                item.setAttribute('style', thumbler_style[index]);
                if( Array.isArray(this.tooltip) ) {
                    item.append(this.tooltip[index]);
                }
            });

            let connect_style: string = Array.isArray(current_position)
                ? orientation === 'horizontal'
                    ? 'left: ' + (current_position[0] * 100) + '%; width: ' + ( (current_position[1] - current_position[0]) * 100) + '%;'
                    : 'top: ' + (current_position[0] * 100) + '%; height: ' + ( (current_position[1] - current_position[0]) * 100) + '%;'
                : '';
            this.connect.setAttribute('style', connect_style);

            this.slider.append(this.thumbler[0], this.thumbler[1]);

        }

        this.slider.append(this.connect);
        this.container.append(this.slider);
        console.log(current_value);
    }
}