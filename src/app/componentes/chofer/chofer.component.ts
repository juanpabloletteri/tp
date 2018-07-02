import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {

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
        label: 'Ver Viajes',
        icon: 'fa-edit',
        command: (click) => { this.rute.navigate(['chofer/viajes']) }
      }
    ];
  }
  salir() {
    localStorage.removeItem('token');
    this.rute.navigate(['']);
  }
}
