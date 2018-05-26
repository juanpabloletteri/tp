import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PrimengModule } from './modulos/primeng/primeng.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
