import { animate, style, transition, trigger } from "@angular/animations";

export const routeAnimationState = trigger('routeAnimationState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(500),
  ]),
  transition(':leave', [
    animate(300,
      style({
        transform: 'translateY(-100%)',
        opacity: 0
      })
    )

  ])
])
