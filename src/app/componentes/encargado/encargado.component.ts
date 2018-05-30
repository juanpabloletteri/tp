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
          { label: 'Chofer', icon: 'fa-mail-forward', command: (click) => { this.componente = 1 } },
          { label: 'Cliente', icon: 'fa-mail-reply', command: (click) => { this.componente = 2 } },
          { label: 'Encargado', icon: 'fa-mail-reply', command: (click) => { this.componente = 3 } },
          { label: 'Vehiculo', icon: 'fa-mail-reply', command: (click) => { this.componente = 4 } }
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
        command: (click) => { this.componente = 5 }
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
