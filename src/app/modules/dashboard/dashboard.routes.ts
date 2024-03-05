import { Route } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

export const DASHBOARD_ROUTES: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
        ],
    },
];
