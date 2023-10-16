import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServerService} from "../../services/server/server.service";
import {ILogin, IRegister} from "../../Interface/Interface";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {IFormLabel} from "../../shared/forms/forms.component";

@Component({
  selector: 'ssg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  createSubmitted = false
  loginSubmitted = false

  formGroup : FormGroup = new FormGroup({
    'organization-name':new FormControl('',[Validators.required]),
    'phone-number':new FormControl('',[Validators.required]),
    'address':new FormControl('',[Validators.required]),
    'username':new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required]),

  })

  formLogin : FormGroup = new FormGroup({
    'email':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required]),


  })


  labels :IFormLabel[]= [
    {
      label:'Email',
      formControlName:'email',
      type:'input'
    },
    {
      label:'Password',
      formControlName:'password',
      type:'input'
    },
  ]
  constructor(private server :ServerService,private router:Router,private authServ:AuthService) {
  }


  createOrganization(){
    if(!this.formGroup.valid) {
      this.createSubmitted = true
      return
    }
    const userDetails = this.formGroup.value as IRegister

    this.authServ.register(userDetails)


  }

  login(){
    if(!this.formLogin.valid) {
      this.loginSubmitted = true
      return
    }
    const userLoginDetail = this.formLogin.value as ILogin

    this.authServ.login(userLoginDetail)
  }


}
