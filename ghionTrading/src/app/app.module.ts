import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TableComponent } from './table/table.component';
import { AddformComponent } from './addform/addform.component';
@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,

    SideBarComponent,
     ShippingComponent,
     TableComponent,
     AddformComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
