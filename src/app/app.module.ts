import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { HomeComponent } from './components/home/home.component';
import { PreviewItemsComponent } from './components/items/add-item/preview-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddItemComponent,
    HomeComponent,
    PreviewItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
