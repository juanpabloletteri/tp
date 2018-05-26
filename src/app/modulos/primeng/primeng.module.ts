import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  declarations: []
})
export class PrimengModule { }
