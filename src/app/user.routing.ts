import { Routes } from "@angular/router";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';

export const USER_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'items/add-item', component: AddItemComponent }
];
