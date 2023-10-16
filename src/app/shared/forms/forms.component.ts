import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface IFormLabel{
  label:string,
  formControlName:string,
  type:'input'|'date'|'select',

}

@Component({
  selector: 'ssg-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{
  @Input() formLabels :IFormLabel[] = []


  formGroup :FormGroup = new FormGroup({})

  ngOnInit() {
    this.createForm()

  }

  createForm(){
    const group :{[key:string]:FormControl} = {}
    for(let a in this.formLabels){
      group[a] = new FormControl('',[Validators.required])

    }
  }

}
