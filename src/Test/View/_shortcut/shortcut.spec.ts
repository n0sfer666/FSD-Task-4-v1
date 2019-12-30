// import { Shortcut } from '../../../Plugin/View/Slider/_shortcut/Shortcut';

// let shortcut: Shortcut = new Shortcut;

// describe('View -> Shortcut', () => {
//     describe('(F) create_element_with_class', () => {
//         let css_classes: T_View_Classes[] = ['slider', 'thumbler', 'connect', 'tooltip'];
//         let orientations: T_Slider_Orientation[] = ['horizontal', 'vertical'];
//         for(let i = 0; i < orientations.length; i++) {
//             for(let j = 0; j < css_classes.length; j++) {
//                 it(('Orientation: ' + orientations[i] + '; Css class: ' + css_classes[j]), () => {
//                     let to_expect: HTMLElement = shortcut.create_element_with_class(css_classes[j], orientations[i]);
//                     let to_result: HTMLElement = document.createElement('div');
//                     to_result.setAttribute('class', ('SRS__' + css_classes[j] + ' SRS__' + css_classes[j] + '_' + orientations[i]));
//                     console.log(to_result);
//                     expect(to_expect.classList).toEqual(to_result.classList);
//                 })
//             }
//         }
//     })
// })