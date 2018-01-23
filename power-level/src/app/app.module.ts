import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { PowerBoxComponent } from './power/power-box/power-box.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    PowerBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
