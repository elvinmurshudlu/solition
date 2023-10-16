import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {AuthService} from "../auth/auth.service"
import {Observable} from "rxjs";
import { Injectable} from "@angular/core";

@Injectable({
  providedIn:"root"
})

export class AdminGuardGuard implements CanActivate{
  constructor(private authServ:AuthService,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {

    // return true

    return new Observable<boolean>(observer=>{
      this.authServ.user.subscribe(user=>{
        if(user && user.isAdmin){
          observer.next(true)
        }else{
          this.router.navigate(['/main','tasks'])

          observer.next(false)
        }

        observer.complete()
      })
    })
  }
}
