import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { AuthGuard } from './services/auth-guard.service';
import { GuestGuard } from './services/guest-guard.service';

// TODO: separate user routes
const USER_ROUTES: Routes = [
    { path: 'items/add-item', component: AddItemComponent }
];

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    { path: '', component: DashboardComponent, canActivate: [AuthGuard], children: USER_ROUTES },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
