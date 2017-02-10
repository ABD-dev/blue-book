import { Routes } from "@angular/router";
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

export const ITEMS_ROUTES: Routes = [
    { path: '', component: ItemListComponent },
    { path: 'add', component: AddItemComponent },
    { path: 'edit/:id', component: ItemEditComponent },
];