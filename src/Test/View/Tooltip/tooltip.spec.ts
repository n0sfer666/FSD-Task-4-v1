import { Tooltip } from '../../../Plugin/View/Slider/Tooltip/Tooltip';

let tooltip: Tooltip = new Tooltip;

describe('View -> Tooltip', () => {
    describe('(F) draw_tooltip', () => {
        it('undefined if is_draw false', () => {
            expect(undefined).toEqual(tooltip.draw_tooltip(false, true, 'horizontal', 10));
        });

        // let array_is_single: boolean[] = [true, false];
        // let orientations: T_Slider_Orientation[] = ['horizontal', 'vertical'];
        // for(let i = 0; i < array_is_single.length; i++) {
        //     for(let j = 0; j < orientations.length; j++) {
        //         it(String('is_single: ' + array_is_single[i] + '; Orientation: ' + orientations[j]), () => {
        //             let value: T_Slider_Value;
        //             let to_expect: T_View_Thumbler_or_Tooltip;
        //             if(array_is_single[i]) {
        //                 value = 50;
        //                 to_expect = tooltip.create_element_with_class('tooltip', orientations[i]);
        //                 to_expect.innerText = !Array.isArray(value)
        //                     ? String(value)
        //                     : String(-1);
        //             } else {
        //                 value = [50, 100];
        //                 to_expect = [ tooltip.create_element_with_class('tooltip', orientations[i]), tooltip.create_element_with_class('tooltip', orientations[i]) ];
        //                 to_expect.forEach((item, index) => {
        //                     item.innerText = Array.isArray(value)
        //                         ? String(value[index])
        //                         : String(-1);
        //                 });
                    // }
                // });
            // }
        // }

    });

    describe('(F) set_innerText_tooltip', () => {
        
    })
}) 