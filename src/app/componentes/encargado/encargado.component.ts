import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  items: MenuItem[];
  componente: number;
  listado: number;

  nombre: string;
  apellido: string;

  constructor(public rute: Router, datosUsuario: DatosUsuarioService) {
    this.nombre = datosUsuario.getNombre();
    this.apellido = datosUsuario.getApellido();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Nuevo',
        icon: 'fa-edit',
        items: [
          { label: 'Cliente', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/cliente']) } },
          { label: 'Chofer', icon: 'fa-mail-forward', command: (click) => { this.rute.navigate(['encargado/chofer']) } },
          { label: 'Encargado', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/encargado']) } },
          { label: 'Vehiculo', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/vehiculo']) } },
        ]
      },
      {
        label: 'Listados',
        icon: 'fa-edit',
        items: [
          { label: 'Clientes', icon: 'fa-mail-forward', command: (click) => { this.rute.navigate(['encargado/listaClientes']) } },
          { label: 'Choferes', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/listaChoferes']) } },
          { label: 'Encargado', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/listaEncargados']) } },
          { label: 'Vehiculos', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/listaVehiculos']) } },
           { label: 'Vehiculos y Choferes', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/listaVehiculosychoferes']) } }
        ]
      },
      {
        label: 'Nuevo Viaje',
        icon: 'fa-edit',
        command: (click) => { this.rute.navigate(['encargado/viaje']) }
      },
      {
        label: 'Ver Viajes Por Clientes',
        icon: 'fa-edit',
        command: (click) => { this.rute.navigate(['encargado/viajesclientes']) }
      },
      {
        label: 'Ver Viajes Por Choferes',
        icon: 'fa-edit',
        command: (click) => { this.rute.navigate(['encargado/viajeschoferes']) }
      },
      {
        label: 'Informes',
        icon: 'fa-edit'
      }
    ];
  }

  salir() {
    localStorage.removeItem('token');
    this.rute.navigate(['']);
  }

}
