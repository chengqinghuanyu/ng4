import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RegisteredComponent } from './registered.component';
import { routing } from './registered.routing';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    routing
  ],
  declarations: [RegisteredComponent]
})
export class RegisteredModule { }