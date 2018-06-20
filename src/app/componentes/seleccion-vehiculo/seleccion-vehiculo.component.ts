import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Vehiculo } from '../../clases/vehiculo';
import { ViajesService } from '../../servicios/viajes.service';
import { ChoferService } from '../../servicios/chofer.service';
import { Chofer } from '../../clases/chofer';

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
  vehiculoSeleccionado: Vehiculo;

  constructor(private miServicioVehiculo: VehiculosService, private miServicioViaje: ViajesService,
    private miServicioChofer: ChoferService, private miChofer: Chofer) { }

  ngOnInit() {
    this.miServicioVehiculo.traerTodosLosVehiculos()
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
    this.miServicioChofer.traerChoferPorId(this.vehiculoSeleccionado.id_chofer)
      .then(data => {
        //console.log("data: " + data)
        this.miChofer = data[0];
      })
    console.log(this.miChofer.nombre);
  }

  confirmarVehiculo() {
    this.miServicioViaje.setIdVehiculo(this.vehiculoSeleccionado.id_vehiculo);
    console.log("Id cargado: " + this.miServicioViaje.getIdVehiculo());
  }

}
