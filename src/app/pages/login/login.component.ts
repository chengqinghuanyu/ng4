import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Routes,Router , RouterModule }  from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})

export class Login {
      constructor(private router: Router) {}
  public interval:any[]=[
    {
      value:"redaing",
      display:"阅读"
    },
    {
      value:"trevaling",
      display:"旅游"
    },
    {
      value:"sport",
      display:"运动"
    }
  ];

  public love:string='';
  public info:string='';
  setInfo(){
    this.info=this.love;
  }
  slectit(e){
    console.log(e);
   

  }
  
  onSubmit(formval:any){
    console.log(formval);
    this.router.navigate(['home'],{ fragment: 'top' }); 

    
  }
}
