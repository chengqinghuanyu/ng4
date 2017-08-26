import { Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registered',
  templateUrl: 'registered.component.html',
  styleUrls: ['registered.component.css']
})
export class RegisteredComponent {

  constructor() {}
  onSubmit(formval:any){
    console.log(formval);
    
  }

  ngOnInit() {
  }
}
