import { Route } from '@angular/router';
import { authGuard } from '../../common/guards/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];
