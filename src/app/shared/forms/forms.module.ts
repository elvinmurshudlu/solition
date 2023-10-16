import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {CalendarModule} from "primeng/calendar";



@NgModule({
  declarations: [
    FormsComponent
  ],
  exports: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    MultiSelectModule,
    CalendarModule
  ]
})
export class FormsModule { }
