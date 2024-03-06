import { Routes } from '@angular/router';
import { LandingPageV2Component } from './common/components/landing-page-v2/landing-page-v2.component';
import { LandingPageComponent } from './common/components/landing-page/landing-page.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'v2',
    component: LandingPageV2Component,
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.routes').then((mod) => mod.DASHBOARD_ROUTES),
  },
  { path: '**', component: NotFoundComponent },
];
