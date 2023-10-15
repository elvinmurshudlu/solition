import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Directive({
  selector: '[ssgAdmin]'
})
export class AdminDirectiveDirective {
@Input() set ssgAdmin (condition:boolean){
   this.auth.user.subscribe(user=>{

       if(user){
         if(user.isAdmin === condition){
           this.vc.createEmbeddedView(this.templateRef)

         }else{
           this.vc.clear()
         }
       }


  })


}
  constructor(private auth:AuthService,private templateRef :TemplateRef<any>,private vc:ViewContainerRef) { }

}
