import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Pages } from './pages.component';
import { routing }       from './pages.routing';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { RegisteredModule } from './registered/registered.module';
import { ModifypasswordModule } from './modifypassword/modifypassword.module';
import { WindowDirective } from './window.directive';
import { HeaderComponent } from './header/header.component'
@NgModule({
  imports: [CommonModule,routing,LoginModule,HomeModule, RegisteredModule, ModifypasswordModule],
  declarations: [Pages, WindowDirective, HeaderComponent,],
})
export class PagesModule {}