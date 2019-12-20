import { Ex } from './ex/Ex';
export class View {

    ex: Ex;

    constructor(private slider: HTMLElement, private isSingleThumbler: boolean) {
        this.ex = new Ex(this.slider, this.isSingleThumbler);
    }
}