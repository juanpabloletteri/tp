import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-viajes-encargado-choferes',
  templateUrl: './listado-viajes-encargado-choferes.component.html',
  styleUrls: ['./listado-viajes-encargado-choferes.component.css']
})
export class ListadoViajesEncargadoChoferesComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  id_chofer: number;
  viajeSeleccionado: Viaje;
  estadoViaje: any;

  costo: string;
  distancia: string;

  constructor(private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService) {

    this.id_chofer = this.datosUsuario.getIdUsuario();
    this.miServicioViaje.traerTodosLosviajesConChoferes()
      .then(data => {
        this.datosTabla = data;
      })

  }

  ngOnInit() {
    this.cols = [
      { field: 'legajo', header: 'Legajo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'fecha_salida', header: 'Fecha' },
      { field: 'inicio', header: 'Inicio' },
      { field: 'destino', header: 'Destino' },
      { field: 'estado', header: 'Estado' }
    ];
    this.estadoViaje = [
      { label: 'Ver Todos', value: null },
      { label: 'Pendientes', value: '0' },
      { label: 'Aceptados', value: '-1' },
      { label: 'En viaje', value: '-2' },
      { label: 'Realizados', value: '-3' },
      { label: 'Canc chofer', value: '-4' },
      { label: 'Canc cliente', value: '-5' }
    ];
  }

  onRowSelect(event) {
    console.log(this.viajeSeleccionado.id_viaje);
    this.distancia = (this.viajeSeleccionado.distancia / 1000) + ' km';
    this.costo = '$ ' + (this.viajeSeleccionado.costo);
  }

  onRowUnselect(event) {

  }

}
