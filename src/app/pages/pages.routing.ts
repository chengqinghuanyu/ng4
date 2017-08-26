import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Pages } from './pages.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { RegisteredModule } from './registered/registered.module';
import { ModifypasswordModule } from './modifypassword/modifypassword.module';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: 'home/home.module#HomeModule'
  },
  {
    path: 'registered',
    loadChildren: 'registered/registered.module#RegisteredModule'
  },
  {
    path: 'modifypassword',
    loadChildren: 'modifypassword/modifypassword.module#ModifypasswordModule'
  }
  
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
