import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService, private rute: Router) {

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
      { label: 'Aceptados', value: '-1' },
      { label: 'En viaje', value: '-2' },
      { label: 'Realizados', value: '-3' },
      { label: 'Canc chofer', value: '-4' },
      { label: 'Canc cliente', value: '-5' }
    ];
  }

  onRowSelect(event) {
    console.log(this.viajeSeleccionado.id_viaje);
    //this.display = true;
  }

  onRowUnselect(event) {

  }

  aceptar(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -1, "Viaje Aceptado!");
    /*this.miServicioViaje.cambiarEstadoViaje(id_viaje, -1)
      .then(data => {
        console.log(data);
        swal("Viaje Aceptado!");
        this.rute.navigate(['chofer']);
      })*/
  }

  cancelar(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -4, "Viaje Cancelado!");
    /*this.miServicioViaje.cambiarEstadoViaje(id_viaje, -4)
      .then(data => {
        console.log(data);
        swal("Viaje Cancelado!");
        this.rute.navigate(['chofer']);
      })*/
  }

  enViaje(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -2, "Viaje en curso!");
  }

  confirmar(id_viaje) {
    this.cambiarEstadoViaje(id_viaje, -3, "Viaje Relizado!");
  }

  cambiarEstadoViaje(id, estado, mensaje) {
    this.miServicioViaje.cambiarEstadoViaje(id, estado)
      .then(data => {
        console.log(data);
        swal(mensaje);
        this.rute.navigate(['chofer']);
      })
  }
}
