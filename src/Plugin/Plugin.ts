import { Model } from './Model/Model';
import { View } from './View/View';

export class SimpleRangeSlider {

    private model: Model;
    private view: View;

    constructor(private container: JQuery, private user_configuration: I_Configuration) {

        let slider: HTMLElement = this.container.get(0);
        
        let default_Configuration: I_Configuration = {
            orientation: 'horizontal',
            start: 10,
            range: [0, 100],
            step: 1,
            connect: true,
            tooltip: false
        }

        let configuration: I_Configuration = {
            orientation: this.user_configuration.orientation === undefined ? default_Configuration.orientation : this.user_configuration.orientation,
            start: this.user_configuration.start === undefined ? default_Configuration.start : this.user_configuration.start,
            range: this.user_configuration.range === undefined ? default_Configuration.range : this.user_configuration.range,
            step: this.user_configuration.step === undefined ? default_Configuration.step : this.user_configuration.step,
            connect: this.user_configuration.connect === undefined ? default_Configuration.connect : this.user_configuration.connect,
            tooltip: this.user_configuration.tooltip === undefined ? default_Configuration.tooltip : this.user_configuration.tooltip
        }

        this.model = new Model(configuration);
        this.view = new View(slider);

        // tmp
        // console.log(configuration);
        // console.log(this.user_configuration);
        console.log(this.view);
        console.log(this.model);
        console.log('');
    }

}

;(function($: JQueryStatic) {
    $.fn.extend({
        SimpleRangeSlider: function(user_configuration: I_Configuration) {
            return new SimpleRangeSlider(<JQuery>this, <I_Configuration>user_configuration);
        }
    });
}(jQuery))