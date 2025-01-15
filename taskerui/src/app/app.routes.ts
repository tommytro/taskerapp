import { Routes } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    component: LoginMainComponent 
  },
];
