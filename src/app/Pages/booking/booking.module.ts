import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookingComponent,
      },
    ]),

  ],
  declarations: [BookingComponent]
})
export class BookingPageModule { }
