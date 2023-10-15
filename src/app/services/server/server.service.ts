import { Injectable } from '@angular/core';
import {IAdminsUser, ILogin, IRegister, ITask, IUserDetails, IUsers} from "../../Interface/Interface";
import {Observable, Observer, of} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  users:IUsers = {
    'elvin':{
      password:'123',
      isAdmin:true,
      email:'elvin',
      users:[
        {
          email:"Test",
          password:"Salam",
          surname:"Test",
          name:"bir iki",
          adminEmail:'elvin'
        },{
          email:"Test123",
          password:"Salam",
          surname:"Test",
          name:"bir iki",
          adminEmail:'elvin'

        },{
          email:"Test667",
          password:"Salam",
          surname:"Test",
          name:"bir iki",
          adminEmail:'elvin'

        },{
          email:"Test90",
          password:"Salam",
          surname:"Test",
          name:"bir iki",
          adminEmail:'elvin'

        },
      ],
      tasks:[]
    }


  }

  constructor() { }

  register(user: IRegister): Observable<boolean | IUserDetails> {
    const email = user.email;

    if (this.users[email]) {

      return of(false);
    }

    const userDetail :IUserDetails = { ...user, isAdmin: true ,tasks:[],users:[]};
    this.users[email] = userDetail;

    return of(userDetail);
  }

  login(user:ILogin) :Observable<any | IUserDetails>{
    const currentUser :IUserDetails = this.users[user.email]
    if(!currentUser) return of(false)

    const userPassword = currentUser.password

    if(user.password != userPassword) return of(false)

    return of(currentUser)

  }

  getUsers(adminEmail:string){
    return of(this.users[adminEmail].users)
  }


  addUser(adminsEmail:string,userDetails:IAdminsUser){
    const admin = this.users[adminsEmail]
    admin.users?.push(userDetails)
    this.users[userDetails.email] = {...userDetails,isAdmin:false,tasks:[],users:[]}

  }

  getTask(email:string){
    console.log(this.users[email].tasks)
    return of(this.users[email].tasks)
  }


  addTask(task:ITask,adminEmail:string){
    const {users,...taskDetails } = task

    if(this.users[adminEmail]){
      this.users[adminEmail]?.tasks.push(task)

      if(users){
        for(let user of users){
          this.users[user.email].tasks.push(taskDetails)
        }
      }

      console.log(this.users)
    }


  }





}
