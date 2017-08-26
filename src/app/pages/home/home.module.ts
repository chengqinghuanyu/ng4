import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from "@angular/forms";
import { routing } from './home.routing';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    routing
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }