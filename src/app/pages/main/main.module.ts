import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import {ButtonModule} from "primeng/button";
import {AdminDirectiveModule} from "../../shared/admin-directive/admin-directive.module";


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ButtonModule,
    AdminDirectiveModule
  ]
})
export class MainModule { }
