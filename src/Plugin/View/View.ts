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
        let css_class_tooltip_bar: string = 'SRS__tooltip-bar';

        if( orientation === 'horizontal' ) {

            css_class_slider += ' SRS__slider_horizontal';
            css_class_thumbler += ' SRS__thumbler_horizontal';
            css_class_connect += ' SRS__connect_horizontal';
            css_class_tooltip += ' SRS__tooltip_horizontal';
            css_class_tooltip_bar += ' SRS__tooltip-bar_horizontal';

        } else {
            
            css_class_slider += ' SRS__slider_vertical';
            css_class_thumbler += ' SRS__thumbler_vertical';
            css_class_connect += ' SRS__connect_vertical';
            css_class_tooltip += ' SRS__tooltip_vertical';
            css_class_tooltip_bar += ' SRS__tooltip-bar_vertical';
            
        }

        this.slider = document.createElement('div');
        this.slider.setAttribute('class', css_class_slider);
        this.tooltip_bar = document.createElement('div');
        this.tooltip_bar.setAttribute('class', css_class_tooltip_bar);
        this.connect = document.createElement('div');
        this.connect.setAttribute('class', css_class_connect);

        if( !Array.isArray(current_value) && !Array.isArray(current_position) ) {

            this.thumbler = document.createElement('div');
            this.thumbler.setAttribute('class', css_class_thumbler);
            let thumbler_position: string = orientation === 'horizontal'
                ? 'transform: translate(' + (current_position * 1000) + '%)'
                : 'transform: translate(0, ' + (current_position * 1000) + '%)';
            this.thumbler.setAttribute('style', thumbler_position);

            this.tooltip = document.createElement('div');
            this.tooltip.setAttribute('class', css_class_tooltip);

            this.slider.append(this.thumbler);
            this.tooltip_bar.append(this.tooltip);

        } else {

            this.thumbler = [ document.createElement('div'), document.createElement('div') ];
            let thumbler_position: [string, string] = Array.isArray(current_position) 
                ? orientation === 'horizontal'
                    ? [ 'transform: translateX(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateX(' + (current_position[1] * 1000) + '%)' ]
                    : [ 'transform: translateY(' + (current_position[0] * 1000) + '%)', 
                        'transform: translateY(' + (current_position[1] * 1000) + '%)' ]
                : ['', ''];
            this.thumbler.forEach( (item, index) => {
                item.setAttribute('class', css_class_thumbler);
                item.setAttribute('style', thumbler_position[index]);

            });

            this.tooltip = [ document.createElement('div'), document.createElement('div') ];
            this.tooltip.forEach( (element) => {
                element.setAttribute('class', css_class_tooltip);
            });

            this.slider.append(this.thumbler[0], this.thumbler[1]);
            this.tooltip_bar.append(this.tooltip[0], this.tooltip[1]);

        }

        this.container.append(this.slider, this.tooltip_bar);

        console.log(current_position);
        console.log(current_value);
    }
}