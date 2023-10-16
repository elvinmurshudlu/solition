import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {ButtonModule} from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from "../../shared/forms/forms.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ]
})
export class LoginModule { }
