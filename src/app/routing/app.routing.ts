import { Routes } from '@angular/router';

import { LoginComponent } from './../authorization/login/login.component';
import { SamplePageComponent } from './../sample-page/sample-page.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sample-page', component: SamplePageComponent }
];
