import { Component, OnInit } from '@angular/core';
import { Encargado } from '../../clases/encargado';
import { EncargadoService } from '../../servicios/encargado.service';

@Component({
  selector: 'app-listado-encargados',
  templateUrl: './listado-encargados.component.html',
  styleUrls: ['./listado-encargados.component.css']
})
export class ListadoEncargadosComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  titulo: string;
  encargadoSeleccionado: Encargado = null;
  display: boolean = false;

  constructor(private miEncargado: Encargado, private miServicioEncargado: EncargadoService) { }

  ngOnInit() {
    this.datosTabla = null;
    //EncargadoES
    //cargo en datosTabla a los clientes
    this.miServicioEncargado.traerTodosLosEncargados()
      .then(data => {
        this.datosTabla = data;
      })
    //nombro las columnas segun lo que quiero mostrar de clientes
    //field es el nombre que trae el campo de la base
    this.titulo = 'Listado de Encargados';
    this.cols = [
      { field: 'legajo', header: 'Legajo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'dni', header: 'Dni' }
    ];
  }

  onRowSelect(event) {
    console.log(this.encargadoSeleccionado.nombre);
    this.display = true;
  }

  onRowUnselect(event) {

  }

  modificar() {
    this.display = false;
    console.log(this.encargadoSeleccionado);
    this.miServicioEncargado.modificarEncargado(this.encargadoSeleccionado);
  }

  eliminar() {
    this.display = false;
    console.log(this.encargadoSeleccionado);
    this.miServicioEncargado.borrarEncargado(this.encargadoSeleccionado.id_usuario);
    //vuelvo a cargar los usuarios
    this.datosTabla = null;
    this.miServicioEncargado.traerTodosLosEncargados()
      .then(data => {
        this.datosTabla = data;
      })
  }
}
