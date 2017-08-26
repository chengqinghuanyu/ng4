import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ModifypasswordComponent } from './modifypassword.component';
import { routing } from './modifypassword.routing';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    routing
  ],
  declarations: [ModifypasswordComponent]
})
export class ModifypasswordModule { }