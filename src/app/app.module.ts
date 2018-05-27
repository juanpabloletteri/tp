import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//MODULO PRIME NG
import { PrimengModule } from './modulos/primeng/primeng.module';
//MODULO GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
//MODULO ROUTEO
import { RouterModule, Route, Routes } from '@angular/router';
//MODULOS COMPONENTES
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ChoferComponent } from './componentes/chofer/chofer.component';
import { EncargadoComponent } from './componentes/encargado/encargado.component';
import { MapaComponent } from './componentes/mapa/mapa.component';


//ROUTEO
const config: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'chofer',
    component: ChoferComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'encargado',
    component: EncargadoComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ChoferComponent,
    EncargadoComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxJkyfYWlA2dETpe29fUe2CYIOVze1bPw'
    }),
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
