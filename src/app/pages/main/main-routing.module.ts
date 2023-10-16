import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";
import {AdminGuardGuard} from "../../services/guard/admin-guard.guard";
import {AuthGuardGuard} from "../../services/guard/auth-guard.guard";

const routes: Routes = [{
  path:'',
  component:MainComponent,
  children:[{
    path:'',
    loadChildren:()=>import('../users/users.module').then(m=>m.UsersModule),
    canActivate:[AdminGuardGuard]
  },
    {
      path:'tasks',
      loadChildren:()=>import('../tasks/tasks.module').then(m=>m.TasksModule),
      canActivate:[AuthGuardGuard]
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
