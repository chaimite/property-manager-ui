import { Routes } from '@angular/router';
import { LoginRegisterComponent } from '../pages/login-register/login-register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path:'', component: LoginRegisterComponent },
    { path: 'dashboard', component: DashboardComponent }
];
