import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegisteredComponent } from './registered.component';
import { ModifypasswordComponent } from '../modifypassword/modifypassword.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'registered',
    component: RegisteredComponent
  },
  {
    path: 'modifypassword',
    component: ModifypasswordComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
