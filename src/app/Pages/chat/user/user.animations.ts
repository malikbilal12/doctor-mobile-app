import { animate, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";


export const userAddState = trigger('userAddState', [
  transition(':enter', [
    animate('800ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)',
        offset: 0.4
      }),
      style({
        transform: 'translateX(0%)',
        offset: 1,
      })
    ]))
  ])
])


// export const userAddState = trigger('userAddState', [
//   transition(':enter', [
//     query('.span', [
//       style({ opacity: 0, transform: 'translateY(-100%)' })
//     ]),
//     query('.span', [
//       stagger('100ms', [
//         animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
//       ])
//     ])
//   ]),
//   transition(':leave', [
//     query('.span', [
//       stagger('100ms', [
//         animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(-100%)' }))
//       ])
//     ])
//   ])
// ]);
