import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage, 
    children: [
      {
        path: 'tasksmain',
        loadComponent: () =>
          import('../tasks-main/tasks-main.page').then((m) => m.TasksMainPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('../login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tasksmain',
    pathMatch: 'full',
  },
];
