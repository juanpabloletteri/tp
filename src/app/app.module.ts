import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//SERVICIO HTTP PERSONALIZADO
import { MiHttpService } from './servicios/mi-http.service';
import { HttpModule } from '@angular/http';
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
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { LoginComponent } from './componentes/login/login.component';


//ROUTEO
const config: Routes = [
  {
    path: '',
    component: LoginComponent
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
  },
  {
    path: 'graficos',
    component: GraficosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ChoferComponent,
    EncargadoComponent,
    MapaComponent,
    GraficosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxJkyfYWlA2dETpe29fUe2CYIOVze1bPw'
    }),
    RouterModule.forRoot(config),
    HttpModule
  ],
  providers: [MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
