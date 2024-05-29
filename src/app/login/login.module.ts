import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginPageRoutingModule } from './login-routing.module';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, CreateComponent]
})
export class LoginPageModule { }
