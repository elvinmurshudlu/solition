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
    AdminDirectiveModule
  ]
})
export class TasksModule { }
