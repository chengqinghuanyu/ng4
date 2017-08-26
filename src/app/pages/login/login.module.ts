import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HomeModule } from "../home/home.module"
import { Login } from './login.component';
import { routing } from './login.routing';
@NgModule({
  imports: [
    CommonModule,FormsModule,HomeModule,
    routing
  ],
  declarations: [Login]
})
export class LoginModule { }
