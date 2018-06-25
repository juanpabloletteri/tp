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
  display: boolean = false;

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
      { field: 'legajo', header: 'Legajo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'dni', header: 'Dni' }
    ];
  }

  onRowSelect(event) {
    console.log(this.choferSeleccionado.nombre);
    this.display = true;
  }

  onRowUnselect(event) {

  }

  modificar() {
    this.display = false;
    console.log(this.choferSeleccionado);
    this.miServicioChofer.modificarChofer(this.choferSeleccionado);
  }

  eliminar() {
    this.display = false;
    console.log(this.choferSeleccionado);
    this.miServicioChofer.borrarChofer(this.choferSeleccionado.id_usuario);
    //vuelvo a cargar los usuarios
    this.datosTabla = null;
    this.miServicioChofer.traerTodosLosChoferes()
      .then(data => {
        this.datosTabla = data;
      })
  }
}
