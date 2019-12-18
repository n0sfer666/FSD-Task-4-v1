import { Data } from './Data/Data';
import { Calculator } from './Calculator/Calculator';
export class Model {

    private data: Data;
    private calculator: Calculator;

    constructor(private configuration: IConfiguration) {

        this.data = new Data();
        this.calculator = new Calculator();
        // tmp
        console.log(this.configuration);
        console.log(this.data);
        console.log(this.calculator);
    }
}