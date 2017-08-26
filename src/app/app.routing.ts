import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Pages } from './pages/pages.component';
export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'pages', 
    pathMatch: 'full'
  },
  { path: 'pages', component: Pages }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

