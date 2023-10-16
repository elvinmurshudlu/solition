import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminDirectiveModule} from "../../shared/admin-directive/admin-directive.module";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {DatePipeModule} from "../../shared/date-pipe/date-pipe.module";


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AdminDirectiveModule,
    CalendarModule,
    InputTextModule,
    DatePipeModule
  ]
})
export class TasksModule { }
