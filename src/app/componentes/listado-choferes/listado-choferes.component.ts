import { Component, OnInit } from '@angular/core';
import { Chofer } from '../../clases/chofer';
import { ChoferService } from '../../servicios/chofer.service';

@Component({
  selector: 'app-listado-choferes',
  templateUrl: './listado-choferes.component.html',
  styleUrls: ['./listado-choferes.component.css']
})
export class ListadoChoferesComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  titulo: string;
  choferSeleccionado: Chofer = null;

  constructor(private miChofer: Chofer, private miServicioChofer: ChoferService) { }

  ngOnInit() {
    this.datosTabla = null;
    //CHOFERES
    //cargo en datosTabla a los clientes
    this.miServicioChofer.traerTodosLosChoferes()
      .then(data => {
        this.datosTabla = data;
      })
    //nombro las columnas segun lo que quiero mostrar de clientes
    //field es el nombre que trae el campo de la base
    this.titulo = 'Listado de Choferes';
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'dni', header: 'Dni' },
      { field: 'legajo', header: 'Legajo' }
    ];
  }

  onRowSelect(event) {
    console.log(this.choferSeleccionado.nombre);
  }

  onRowUnselect(event) {

  }
}
