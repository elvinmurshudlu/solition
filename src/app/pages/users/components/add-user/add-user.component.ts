import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServerService} from "../../../../services/server/server.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {take} from "rxjs";

@Component({
  selector: 'ssg-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  @Output() onAddUser = new EventEmitter()

  addUserForm : FormGroup = new FormGroup<any>({
    'email':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required]),
    'surname':new FormControl('',[Validators.required]),
    'name':new FormControl('',[Validators.required]),
  })

  constructor(private server:ServerService,private auth:AuthService) {
  }

  addUser(){
    if(!this.addUserForm.valid) return



    this.auth.user.pipe(take(1)).subscribe(user=>{
      if(user){
        const newUser = {...this.addUserForm.value,adminEmail:user.email}
        this.server.addUser(user.email,newUser)
        this.onAddUser.emit()
      }
    })


  }

}
