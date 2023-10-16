import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ssg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor(private auth:AuthService , private router:Router) {
  }

  ngOnInit() {
    // this.auth.user.subscribe(user=>{
    //   if(user && user.isAdmin) return
    //
    //   this.router.navigate(['/main','tasks'])
    // })
  }

}
