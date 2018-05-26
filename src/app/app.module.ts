import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimengModule } from './modulos/primeng/primeng.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxJkyfYWlA2dETpe29fUe2CYIOVze1bPw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
