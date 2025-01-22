import { Routes } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import { LoginComponent } from './login/login.component';
import { UserDisplayComponent } from './user-display/user-display.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'users',
    component: UserDisplayComponent
  },
  {
    path: 'tasks-main',
    loadComponent: () => import('./tasks-main/tasks-main.page').then( m => m.TasksMainPage)
  }
];
