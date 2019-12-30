import { Model } from '../Plugin/Model/Model';

describe('Model', () => {
    describe('Single thumbler', () => {

        let config: I_Configuration = {
            orientation: 'horizontal',
            start: -10,
            range: [-100, 100],
            step: 1,
            connect: true,
            tooltip: false
        };

        let model: Model = new Model(config);

        describe('(F) value_to_position(value)', () => {

            it('value is negative', () => {
                let to_expect: number = .25;
                let result: number = model.value_to_position(-50);
                expect(to_expect).toBe(result);
            });
    
            it('value is positive', () => {
                let to_expect: number = .75;
                let result: number = model.value_to_position(50);
                expect(to_expect).toBe(result);
            });
    
        });

        describe('(F) position_to_value(position', () => {
            it('position: 0', () => {
                let to_expect: number = config.range[0];
                let result: number = model.position_to_value(0);
                expect(to_expect).toBe(result);
            });
            it('position: 0.1', () => {
                let to_expect: number = -80;
                let result: number = model.position_to_value(.1);
                expect(to_expect).toBe(result);
            });
            it('position: 1', () => {
                let to_expect: number = config.range[1];
                let result: number = model.position_to_value(1);
                expect(to_expect).toBe(result);
            });
        })

    });

});