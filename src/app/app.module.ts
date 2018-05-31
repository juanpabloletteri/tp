import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//SERVICIO HTTP PERSONALIZADO
import { MiHttpService } from './servicios/mi-http.service';
import { HttpModule } from '@angular/http';
//SERVICIOS
import { ClienteService } from './servicios/cliente.service';
import { VehiculosService } from './servicios/vehiculos.service';
import { ViajesService } from './servicios/viajes.service';
//import { UsuariosService } from './servicios/usuarios.service';
//CLASES
//import { Usuario } from './clases/usuario';
import { Cliente } from './clases/cliente';
import { Vehiculo } from './clases/vehiculo';
import { Viaje } from './clases/viaje';
//MODULO PRIME NG
import { PrimengModule } from './modulos/primeng/primeng.module';
//MODULO GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
//MODULO ROUTEO
import { RouterModule, Route, Routes } from '@angular/router';
//MODULO AUTENTICACION
import { AutenticacionService } from './servicios/autenticacion.service';
//MODULOS COMPONENTES
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ChoferComponent } from './componentes/chofer/chofer.component';
import { EncargadoComponent } from './componentes/encargado/encargado.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgregarViajeComponent } from './componentes/agregar-viaje/agregar-viaje.component';
import { AgregarChoferComponent } from './componentes/agregar-chofer/agregar-chofer.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { AgregarEncargadoComponent } from './componentes/agregar-encargado/agregar-encargado.component';
import { AgregarVehiculoComponent } from './componentes/agregar-vehiculo/agregar-vehiculo.component';
import { ListadoComponent } from './componentes/listado/listado.component';


//ROUTEO
const config: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'chofer',
    component: ChoferComponent,
    canActivate:[AutenticacionService]
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate:[AutenticacionService]
  },
  {
    path: 'encargado',
    component: EncargadoComponent,
    canActivate:[AutenticacionService]
  },
  {
    path: 'mapa',
    component: MapaComponent,
    canActivate:[AutenticacionService]
  },
  {
    path: 'graficos',
    component: GraficosComponent,
    canActivate:[AutenticacionService]
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
    LoginComponent,
    AgregarViajeComponent,
    AgregarChoferComponent,
    AgregarClienteComponent,
    AgregarEncargadoComponent,
    AgregarVehiculoComponent,
    ListadoComponent
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
  providers: [
    MiHttpService,
    ClienteService,
    Cliente,
    VehiculosService,
    Vehiculo,
    ViajesService,
    Viaje
    //UsuariosService,
    //Usuario
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
