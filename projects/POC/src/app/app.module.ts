import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableResponsiveModule } from 'table-responsive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
