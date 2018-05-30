import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listado: number;

  cars: any;

  constructor() { }

  ngOnInit() {
    switch (this.listado) {
      case 1:

        break;
      case 2:

        break;
      default:

        break;

    }
  }

}
