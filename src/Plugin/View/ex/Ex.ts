export class Ex {
    public backgroundLine: HTMLElement;
    public thumbler: HTMLElement;
    constructor(private slider: HTMLElement, private isSingleThumbler: boolean) {
        this.backgroundLine = document.createElement('div');
        this.backgroundLine.setAttribute('class', 'SRS__slider SRS__slider_horizontal');
        this.thumbler = document.createElement('div');
        this.thumbler.setAttribute('class', 'SRS__thumbler')
        this.slider.append(this.backgroundLine);
        this.backgroundLine.append(this.thumbler);


        console.log(this.slider);
        console.log(this.isSingleThumbler);
    }
    public setAtrr(element: HTMLElement, atrr: string, valueOfAtrr: string): void {
        element.setAttribute(atrr, valueOfAtrr);
    } 
}