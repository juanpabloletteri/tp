import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { DataTableModule } from 'primeng/datatable';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChartModule,
    MenubarModule,
    InputMaskModule,
    InputTextModule,
    DataTableModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    PanelModule,
    TableModule,
    DropdownModule,
    SelectButtonModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChartModule,
    MenubarModule,
    InputMaskModule,
    InputTextModule,
    DataTableModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    PanelModule,
    TableModule,
    DropdownModule,
    SelectButtonModule
  ],
  declarations: []
})
export class PrimengModule { }
