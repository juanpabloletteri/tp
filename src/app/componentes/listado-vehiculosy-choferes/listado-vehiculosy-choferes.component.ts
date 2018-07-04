import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Chofer } from '../../clases/chofer';

@Component({
  selector: 'app-listado-vehiculosy-choferes',
  templateUrl: './listado-vehiculosy-choferes.component.html',
  styleUrls: ['./listado-vehiculosy-choferes.component.css']
})
export class ListadoVehiculosyChoferesComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  fumar: any;
  aire: any;
  baul: any;
  seleccion: any[];
  miChofer: Chofer = null;

  constructor(private miServicioVehiculo: VehiculosService) { }

  ngOnInit() {
    this.miServicioVehiculo.traerTodosLosVehiculosConChoferes()
      .then(data => {
        this.datosTabla = data;
      })
    ////////////
    this.cols = [
      { field: 'legajo', header: 'Legajo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'mail', header: 'Mail' },

      { field: 'marca', header: 'Marca' },
      { field: 'modelo', header: 'Modelo' },
      { field: 'anio', header: 'Año' }
    ];
    
  }

  onRowSelect(event) {


  }

}

