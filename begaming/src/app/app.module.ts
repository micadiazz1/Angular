import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareListComponent } from './hardware-list/hardware-list.component';
import { FormsModule } from '@angular/forms';
import { BegamingAboutComponent } from './begaming-about/begaming-about.component';

import { BegamingHardwareComponent } from './begaming-hardware/begaming-hardware.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { BegamingCartComponent } from './begaming-cart/begaming-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareListComponent,
    BegamingAboutComponent,
    BegamingHardwareComponent,
    InputIntegerComponent,
    BegamingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
