import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/routes').then((m) => m.loginRoutes),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register-page/routes').then((m) => m.registerRoutes),
  },
];
