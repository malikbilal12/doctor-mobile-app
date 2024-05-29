import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ScrollerComponent } from './scroll-infinte/scroller.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'make',
        component: MakeAppointmentComponent,
      },
    ]),

  ],
  declarations: [HomePageComponent, ScrollerComponent, MakeAppointmentComponent]
})
export class HomeCompPageModule { }
