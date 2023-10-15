import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import { AddUserComponent } from './components/add-user/add-user.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
