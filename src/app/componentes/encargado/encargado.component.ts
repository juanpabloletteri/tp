import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  componente: number;

  ngOnInit() {
    this.items = [
      {
        label: 'Nuevo',
        icon: 'fa-edit',
        items: [
          { label: 'Cliente', icon: 'fa-mail-forward' },
          { label: 'Chofer', icon: 'fa-mail-reply' },
          { label: 'Vehiculo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Modificar',
        icon: 'fa-edit',
        items: [
          { label: 'Cliente', icon: 'fa-mail-forward' },
          { label: 'Chofer', icon: 'fa-mail-reply' },
          { label: 'Vehiculo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Nuevo Viaje',
        icon: 'fa-edit',
        command: (click) => { this.nuevoViaje() }
      },
      {
        label: 'Nuevo Usuario',
        icon: 'fa-edit',
        command: (click) => { this.nuevoUsuario() }
      },
      {
        label: 'Informes',
        icon: 'fa-edit'
      }

    ];
  }

  nuevoUsuario() {
    this.componente = 1;
  }
  nuevoViaje() {
    this.componente = 2;
  }
}
