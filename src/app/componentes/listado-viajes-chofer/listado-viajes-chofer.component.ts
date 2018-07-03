import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-viajes-chofer',
  templateUrl: './listado-viajes-chofer.component.html',
  styleUrls: ['./listado-viajes-chofer.component.css']
})
export class ListadoViajesChoferComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  id_chofer: number;
  viajeSeleccionado: Viaje;
  estadoViaje: any;

  constructor(private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService) {

    this.id_chofer = this.datosUsuario.getIdUsuario();
    this.miServicioViaje.traerViajesPorChofer(this.id_chofer)
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

  confirmar(id_viaje) {
    this.miServicioViaje.cambiarEstadoViaje(id_viaje, 1)
      .then(data => {
        console.log(data);
      })
  }

}
