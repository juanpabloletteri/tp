import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  constructor(public rute: Router) { }

  items: MenuItem[];
  componente: number;
  listado: number;

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
          { label: 'Clientes', icon: 'fa-mail-forward', command: (click) => { this.componente = 5, this.listado = 1 } },
          { label: 'Choferes', icon: 'fa-mail-reply', command: (click) => { this.componente = 5, this.listado = 2 } },
          { label: 'Encargado', icon: 'fa-mail-reply', command: (click) => { this.componente = 5, this.listado = 3 } },
          { label: 'Vehiculos', icon: 'fa-mail-reply', command: (click) => { this.componente = 5, this.listado = 4 } }
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
        command: (click) => { this.componente = 10 }
      },
      {
        label: 'Nuevo Cliente',
        icon: 'fa-edit',
        command: (click) => { this.componente = 2 }
      },
      {
        label: 'Informes',
        icon: 'fa-edit'
      }

    ];
  }

}
