import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

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
        label: 'Nuevo Viaje',
        icon: 'fa-edit',
        command: (click) => { this.rute.navigate(['cliente/viaje']) }
      },
      {
        label: 'Ver Viajes',
        icon: 'fa-edit',
        command: (click) => { this.rute.navigate(['cliente/listaviaje']) }
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
