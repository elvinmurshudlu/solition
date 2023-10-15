import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ILogin, IRegister, IUserDetails} from "../../Interface/Interface";
import {ServerService} from "../server/server.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<null | IUserDetails>(null)

  constructor(private server:ServerService,private router:Router) { }

  private add(userDetails:IUserDetails){
    this.user.next(userDetails)
    this.router.navigate(['/main'])
  }

  private remove(){
    this.user.next(null)
    this.router.navigate(['/'])
  }


  register(userDetails:IRegister){
     this.server.register(userDetails).subscribe(user=>{
      if(user){

        this.add(user as IUserDetails)


      }

    })
  }

  login(userLoginDetail:ILogin){
    this.server.login(userLoginDetail).subscribe(user=>{
      if(user){
        this.add(user)
      }
    })


  }

  logOut(){
    this.remove()
  }

}
