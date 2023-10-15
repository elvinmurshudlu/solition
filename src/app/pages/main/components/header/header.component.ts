import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'ssg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authServ:AuthService) {

  }


  logOut(){
    this.authServ.logOut()
  }
}
