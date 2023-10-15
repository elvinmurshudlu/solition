import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {IAdminsUser} from "../../Interface/Interface";
import {ServerService} from "../../services/server/server.service";
import {take} from "rxjs";

@Component({
  selector: 'ssg-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users !:IAdminsUser[]


  visible = false
  constructor(private authServ:AuthService,private service:ServerService) {
  }


  getUsers(){
    this.authServ.user.pipe(take(1)).subscribe(user=>{
      if(user){
        this.service.getUsers(user?.email).pipe(take(1)).subscribe(users=>{
          this.users = users || []
          this.visible= false
        })
      }
    })

  }

  ngOnInit() {
    this.getUsers()
  }

  showDialog() {
    this.visible = true;
  }


}
