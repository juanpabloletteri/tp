import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-viajes-encargado',
  templateUrl: './listado-viajes-encargado.component.html',
  styleUrls: ['./listado-viajes-encargado.component.css']
})
export class ListadoViajesEncargadoComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  id_chofer: number;
  viajeSeleccionado: Viaje;
  estadoViaje: any;

  constructor(private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService) {

    this.id_chofer = this.datosUsuario.getIdUsuario();
    this.miServicioViaje.traerTodosLosviajes()
      .then(data => {
        this.datosTabla = data;
      })

  }

  ngOnInit() {
    this.cols = [
      { field: 'inicio', header: 'Inicio' },
      { field: 'destino', header: 'Destino' },
      { field: 'distancia', header: 'Distancia' },
      { field: 'costo', header: 'Costo' },
      { field: 'estado', header: 'Estado' }
    ];
    this.estadoViaje = [
      { label: 'Ver Todos', value: null },
      { label: 'Pendientes', value: '0' },
      { label: 'Realizados', value: '1' },
    ];
  }

  onRowSelect(event) {
    console.log(this.viajeSeleccionado.id_viaje);
    //this.display = true;
  }

  onRowUnselect(event) {

  }

}
