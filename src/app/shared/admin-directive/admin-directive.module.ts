import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDirectiveDirective } from './admin-directive.directive';



@NgModule({
  declarations: [
    AdminDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[AdminDirectiveDirective]
})
export class AdminDirectiveModule { }
