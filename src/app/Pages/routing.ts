import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/homepage.module').then((m) => m.HomeCompPageModule),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then((m) => m.ExplorePageModule),
  },

  {
    path: 'bookings',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingPageModule),
  },

  {
    path: 'chat',
    loadChildren: () =>
      import('./chat/chat.module').then((m) => m.ChatPageModule),
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
