import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { UserComponent } from './user/user.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
    ]),

  ],
  declarations: [ChatComponent, UserComponent]
})
export class ChatPageModule { }
