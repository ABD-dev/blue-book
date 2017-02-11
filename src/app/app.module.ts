import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { AppSettings } from './app.config';
import { AuthService, authHttpServiceFactory } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { GuestGuard } from './services/guest-guard.service';

import { ModalModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { PreviewItemsComponent } from './components/items/add-item/preview-items.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { ItemListComponent } from './components/items/item-list/item-list.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemEditComponent } from './components/items/item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddItemComponent,
    PreviewItemsComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    MainComponent,
    ItemListComponent,
    ItemsComponent,
    ItemEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    ModalModule.forRoot(),
  ],
  providers: [
    AppSettings,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthGuard,
    GuestGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
