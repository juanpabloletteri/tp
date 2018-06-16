import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//SERVICIO HTTP PERSONALIZADO
import { MiHttpService } from './servicios/mi-http.service';
import { HttpModule } from '@angular/http';
//SERVICIOS
import { ClienteService } from './servicios/cliente.service';
import { ChoferService } from './servicios/chofer.service';
import { EncargadoService } from './servicios/encargado.service';
import { VehiculosService } from './servicios/vehiculos.service';
import { ViajesService } from './servicios/viajes.service';
import { LoginService } from './servicios/login.service';
//import { UsuariosService } from './servicios/usuarios.service';
//CLASES
//import { Usuario } from './clases/usuario';
import { Cliente } from './clases/cliente';
import { Chofer } from './clases/chofer';
import { Encargado } from './clases/encargado';
import { Vehiculo } from './clases/vehiculo';
import { Viaje } from './clases/viaje';
import { Objeto } from './clases/objeto';
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
import { ListadoComponent } from './componentes/listado/listado.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { AltaClienteComponent } from './componentes/alta-cliente/alta-cliente.component';
import { AltaVehiculoComponent } from './componentes/alta-vehiculo/alta-vehiculo.component';
import { AltaChoferComponent } from './componentes/alta-chofer/alta-chofer.component';
import { AltaEncargadoComponent } from './componentes/alta-encargado/alta-encargado.component';
import { ListadoClientesComponent } from './componentes/listado-clientes/listado-clientes.component';
import { ListadoVehiculosComponent } from './componentes/listado-vehiculos/listado-vehiculos.component';
import { ListadoEncargadosComponent } from './componentes/listado-encargados/listado-encargados.component';
import { ListadoChoferesComponent } from './componentes/listado-choferes/listado-choferes.component';
import { AltaViajeComponent } from './componentes/alta-viaje/alta-viaje.component';
import { ListadoViajesComponent } from './componentes/listado-viajes/listado-viajes.component';
import { componentFactoryName } from '@angular/compiler';


//ROUTEO
const config: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'encargado',
    component: EncargadoComponent,
    canActivate: [AutenticacionService],
    children: [
      {
        path: 'chofer',
        component: AltaChoferComponent,
        canActivate: [AutenticacionService]
      },
      {
        path: 'cliente',
        component: AltaClienteComponent,
        canActivate: [AutenticacionService]
      },
      {
        path: 'encargado',
        component: AltaEncargadoComponent,
        canActivate: [AutenticacionService]
      },
      {
        path: 'vehiculo',
        component: AltaVehiculoComponent,
        canActivate: [AutenticacionService]
      }
    ]
  },
  {
    path: 'chofer',
    component: ChoferComponent,
    canActivate: [AutenticacionService]
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [AutenticacionService]
  },
  {
    path: 'encargado',
    component: EncargadoComponent,
    canActivate: [AutenticacionService]
  },
  {
    path: 'mapa',
    component: MapaComponent,
    canActivate: [AutenticacionService]
  },
  {
    path: 'graficos',
    component: GraficosComponent,
    canActivate: [AutenticacionService]
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
    ListadoComponent,
    AgregarComponent,
    AltaClienteComponent,
    AltaVehiculoComponent,
    AltaChoferComponent,
    AltaEncargadoComponent,
    ListadoClientesComponent,
    ListadoVehiculosComponent,
    ListadoEncargadosComponent,
    ListadoChoferesComponent,
    AltaViajeComponent,
    ListadoViajesComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
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
    ChoferService,
    Chofer,
    EncargadoService,
    Encargado,
    VehiculosService,
    Vehiculo,
    ViajesService,
    Viaje,
    Objeto,
    LoginService
    //UsuariosService,
    //Usuario
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
