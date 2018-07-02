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
import { DatosUsuarioService } from '././servicios/datos-usuario.service';
//import { UsuariosService } from './servicios/usuarios.service';
//CLASES
//import { Usuario } from './clases/usuario';
import { Cliente } from './clases/cliente';
import { Chofer } from './clases/chofer';
import { Encargado } from './clases/encargado';
import { Vehiculo } from './clases/vehiculo';
import { Viaje } from './clases/viaje';
//MODULO PRIME NG
import { PrimengModule } from './modulos/primeng/primeng.module';
//MODULO GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction
//MODULO ROUTEO
import { RouterModule, Route, Routes } from '@angular/router';
//MODULO AUTENTICACION
import { AutEncargadoService } from '././servicios/autenticacion/aut-encargado.service';
import { AutChoferService } from '././servicios/autenticacion/aut-chofer.service';
import { AutClienteService } from '././servicios/autenticacion/aut-cliente.service';
//MODULOS COMPONENTES
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ChoferComponent } from './componentes/chofer/chofer.component';
import { EncargadoComponent } from './componentes/encargado/encargado.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { LoginComponent } from './componentes/login/login.component';
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
import { SeleccionVehiculoComponent } from './componentes/seleccion-vehiculo/seleccion-vehiculo.component';
import { SinoPipe } from './pipes/sino.pipe';
import { RegistroComponent } from './componentes/registro/registro.component';


//ROUTEO
const config: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'encargado',
    component: EncargadoComponent,
    //canActivate: [AutEncargadoService],
    children: [
      ////////////ALTAS//////////
      {
        path: 'chofer',
        component: AltaChoferComponent,
      },
      {
        path: 'cliente',
        component: AltaClienteComponent,
      },
      {
        path: 'encargado',
        component: AltaEncargadoComponent,
      },
      {
        path: 'vehiculo',
        component: AltaVehiculoComponent,
      },
      ////////LISTAS//////////
      {
        path: 'listaChoferes',
        component: ListadoChoferesComponent,
      },
      {
        path: 'listaClientes',
        component: ListadoClientesComponent,
      },
      {
        path: 'listaEncargados',
        component: ListadoEncargadosComponent,
      },
      {
        path: 'listaVehiculos',
        component: SeleccionVehiculoComponent,
      },
      /////////VIAJE//////////
      {
        path: 'viaje',
        component: AltaViajeComponent,
      }
    ]
  },
  {
    path: 'chofer',
    component: ChoferComponent,
    //canActivate: [AutChoferService],
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    //canActivate: [AutClienteService],
    children: [
      {
        path: 'viaje',
        component: AltaViajeComponent
      },
      {
        path: 'listaviaje',
        component: ListadoViajesComponent
      }
    ]
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'graficos',
    component: GraficosComponent
  },
  {
    path: 'nuevoViaje',
    component: AltaViajeComponent
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
    AltaClienteComponent,
    AltaVehiculoComponent,
    AltaChoferComponent,
    AltaEncargadoComponent,
    ListadoClientesComponent,
    ListadoVehiculosComponent,
    ListadoEncargadosComponent,
    ListadoChoferesComponent,
    AltaViajeComponent,
    ListadoViajesComponent,
    SeleccionVehiculoComponent,
    SinoPipe,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxJkyfYWlA2dETpe29fUe2CYIOVze1bPw',
      libraries: ["places"]
    }),
    AgmDirectionModule,
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
    DatosUsuarioService,
    VehiculosService,
    Vehiculo,
    ViajesService,
    Viaje,
    LoginService,
    AutEncargadoService,
    AutChoferService,
    AutClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
