import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public rute: Router) { }

  items: MenuItem[];
  componente: number;
  listado: number;

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

}
