import { RouterModule, Routes } from "@angular/router";

// import { UserComponent } from "./user/user.component";
// import { HomeComponent } from "./home-component.component";
// import { USER_ROUTES } from "./user/user.routes";
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'items/add-item', component: AddItemComponent }
    // { path: 'user/:id', component: UserComponent },
    // { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
    // { path: '', component: HomeComponent },
    // { path: '**', redirectTo: '/user/1', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
