import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ModifypasswordComponent } from './modifypassword.component';
// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'modifypassword',
    component: ModifypasswordComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
