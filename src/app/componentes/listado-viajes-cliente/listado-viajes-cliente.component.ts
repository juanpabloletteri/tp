import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-viajes-cliente',
  templateUrl: './listado-viajes-cliente.component.html',
  styleUrls: ['./listado-viajes-cliente.component.css']
})
export class ListadoViajesClienteComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  id_cliente: number;
  viajeSeleccionado: Viaje;
  estadoViaje: any;

  constructor(private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService, private rute: Router) {

    this.id_cliente = this.datosUsuario.getIdUsuario();
    this.miServicioViaje.traerViajesPorCliente(this.id_cliente)
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
      { label: 'Cancelados', value: '2' }
    ];
  }

  onRowSelect(event) {
    console.log(this.viajeSeleccionado.id_viaje);
    //this.display = true;
  }

  onRowUnselect(event) {

  }

  cancelar(id_viaje) {
    this.miServicioViaje.cambiarEstadoViaje(id_viaje, 2)
      .then(data => {
        console.log(data);
        swal("Viaje cancelado :(");
        this.rute.navigate(['cliente']);
      })
  }

}
