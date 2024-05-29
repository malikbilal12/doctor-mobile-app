import { animate, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";


export const clickedState = trigger('clickedState', [
  state('default', style({
    backgroundColor: '#0054E9'
  })),
  state('clicked', style({
    padding: '10px',
    backgroundColor: '#0c2b59'
  })),
  transition('default => clicked', animate('2s')),
  transition('clicked => default', animate('1s'))
])

export const selectState = trigger('selectState', [
  state('unselected', style({
    border: '0.1px solid #0668FC'
  })),
  state('selected', style({
    border: '2px solid #0668FC',

  })),
  transition('unselected => selected', animate('.5s')),
  transition('selected => unselected', animate('.5s')),
])
export const doctorAddState = trigger('doctorAddState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)',
    }),
    animate('800ms ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0%)',
      })
    )
  ])
])
export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0, transform: 'translateX(-100%)', }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(100%)', })))],
      { optional: true }
    ),
  ]),
])
