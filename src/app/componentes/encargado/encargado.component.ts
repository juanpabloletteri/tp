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
          { label: 'Clientes', icon: 'fa-mail-forward', command: (click) => { this.rute.navigate(['encargado/listaClientes']) } },
          { label: 'Choferes', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/listaChoferes']) } },
          { label: 'Encargado', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/listaEncargados']) } },
          { label: 'Vehiculos', icon: 'fa-mail-reply', command: (click) => { this.rute.navigate(['encargado/listaVehiculos']) } }
        ]
      },
      {
        label: 'Nuevo Viaje',
        icon: 'fa-edit',
        command: (click) => { this.rute.navigate(['encargado/viaje']) }
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
