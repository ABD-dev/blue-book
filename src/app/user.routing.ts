import { Routes } from "@angular/router";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ITEMS_ROUTES } from './components/items/items.routes';
import { ItemsComponent } from './components/items/items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const USER_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'items', component: ItemsComponent, children: ITEMS_ROUTES },
    { path: 'checkout', component: CheckoutComponent },
];
