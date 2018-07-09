import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { ViajesService } from '../../servicios/viajes.service';

@Component({
  selector: 'app-seleccion-vehiculo',
  templateUrl: './seleccion-vehiculo.component.html',
  styleUrls: ['./seleccion-vehiculo.component.css']
})
export class SeleccionVehiculoComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  titulo: string;
  fumar: any;
  aire: any;
  baul: any;
  vehiculoSeleccionado: any = null;

  constructor(private miServicioVehiculo: VehiculosService, private miServicioViaje: ViajesService) { }

  ngOnInit() {
    this.miServicioVehiculo.traerTodosLosVehiculosConChoferes()
      .then(data => {
        this.datosTabla = data;
      })
    ////////////
    this.titulo = 'VEHICULOS';
    this.cols = [
      { field: 'marca', header: 'Marca' },
      { field: 'modelo', header: 'Modelo' },
      { field: 'anio', header: 'Año' },
      { field: 'fumar', header: 'Fumar' },
      { field: 'aire', header: 'Aire' },
      { field: 'baul', header: 'Baul' }
    ];
    this.fumar = [
      { label: 'Ver Todos', value: null },
      { label: 'No Fumador', value: '0' },
      { label: 'Fumador', value: '1' },
    ];
    this.aire = [
      { label: 'Ver Todos', value: null },
      { label: 'Sin Aire', value: '0' },
      { label: 'Con aire', value: '1' },
    ];
    this.baul = [
      { label: 'Ver Todos', value: null },
      { label: 'Sin Baul', value: '0' },
      { label: 'Con Baul', value: '1' },
    ];
  }

  onRowSelect(event) {
    this.miServicioViaje.setIdVehiculo(this.vehiculoSeleccionado.id_vehiculo);
    this.miServicioViaje.setIdChofer(this.vehiculoSeleccionado.id_usuario);
  }

}
