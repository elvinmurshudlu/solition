import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardGuard} from "./services/guard/auth-guard.guard";

const routes: Routes = [{
  path:"",
  children:[
    {path:''
    ,
    loadChildren:()=>import("./pages/login/login.module").then(m=>m.LoginModule)
    }

  ]
}
,
  {
  path:'main',
    loadChildren:()=>import('./pages/main/main.module').then(m=>m.MainModule),

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
