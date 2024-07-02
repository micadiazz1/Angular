import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareListComponent } from './hardware-list/hardware-list.component';
import { FormsModule } from '@angular/forms';
import { BegamingAboutComponent } from './begaming-about/begaming-about.component';
import { BegamingCardComponent } from './begaming-card/begaming-card.component';
import { BegamingHardwareComponent } from './begaming-hardware/begaming-hardware.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareListComponent,
    BegamingAboutComponent,
    BegamingCardComponent,
    BegamingHardwareComponent
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
