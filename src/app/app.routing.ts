import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './services/auth-guard.service';
import { GuestGuard } from './services/guest-guard.service';
import { USER_ROUTES } from './user.routing';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    { path: '', component: MainComponent, canActivate: [AuthGuard], children: USER_ROUTES },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
