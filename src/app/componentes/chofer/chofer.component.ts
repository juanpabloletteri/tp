import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {

  items: MenuItem[];
  componente: number;
  listado: number;

  constructor(public rute: Router) { }

  ngOnInit() {
    this.items = [
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
