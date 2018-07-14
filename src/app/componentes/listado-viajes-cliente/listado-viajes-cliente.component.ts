import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import { EncuestaService } from '../../servicios/encuesta.service';
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

  constructor(private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService, private rute: Router, private miServicioEncuesta: EncuestaService) {

    this.id_cliente = this.datosUsuario.getIdUsuario();
    this.miServicioViaje.traerViajesPorCliente(this.id_cliente)
      .then(data => {
        this.datosTabla = data;
      })

  }

  ngOnInit() {
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

  cancelar(id_viaje) {
    this.miServicioViaje.cambiarEstadoViaje(id_viaje, -5)
      .then(data => {
        //console.log(data);
        swal("Viaje cancelado :(");
        this.rute.navigate(['cliente']);
      })
  }

  enviar(unViaje) {
    console.log("unviaje: ");
    console.log(unViaje);
    this.miServicioEncuesta.setIdViaje(unViaje.id_viaje);
    this.miServicioEncuesta.setIdChofer(unViaje.id_chofer);
    this.miServicioEncuesta.setIdVehiculo(unViaje.id_vehiculo);
    this.rute.navigate(['cliente/encuesta']);

  }

}
