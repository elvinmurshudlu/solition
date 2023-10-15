import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {take} from "rxjs";
import {ServerService} from "../../services/server/server.service";
import {IAdminsUser, ITask} from "../../Interface/Interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ssg-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  tasks :ITask[] = []

  users : IAdminsUser[] = []


  addTaskForm : FormGroup = new FormGroup<any>({
    'title':new FormControl('',[Validators.required]),
    'description':new FormControl('',[Validators.required]),
    'deadline':new FormControl('',[Validators.required]),
    'status':new FormControl('',[Validators.required]),
    'users':new FormControl([],[Validators.required]),
  })

  visible =false

  constructor(private auth:AuthService,private server:ServerService) {
  }
  showModal(){
    this.visible = true
    this.getUsers()
  }


  getUsers(){
    this.auth.user.pipe(take(1)).subscribe(user=>{
      if(user){
        this.server.getUsers(user.email).pipe(take(1)).subscribe(adminsUsers=>{
          this.users = adminsUsers || []
        })

      }
    })

  }

  getTask(){
    this.auth.user.pipe(take(1)).subscribe(user=>{
      if(user){
        this.server.getTask(user?.adminEmail || user.email).subscribe(tasks=>{
          this.tasks = tasks
        })
      }
    })
  }

  getMyTask(){
    this.auth.user.pipe(take(1)).subscribe(user=>{
      if(user){
        this.server.getTask( user.email).subscribe(tasks=>{
          this.tasks = tasks
        })
      }
    })
  }

  addTask(){
    this.auth.user.pipe(take(1)).subscribe(user=>{
      if(user){
        this.server.addTask(this.addTaskForm.value,user?.email)
        this.getTask()
      }
    })
  }

  ngOnInit() {
    this.getTask()
  }

}
