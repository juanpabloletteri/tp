import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../servicios/viajes.service';

@Component({
  selector: 'app-estadisticas-chofer',
  templateUrl: './estadisticas-chofer.component.html',
  styleUrls: ['./estadisticas-chofer.component.css']
})
export class EstadisticasChoferComponent implements OnInit {

  datosTabla: any;
  cols: any;
  choferSeleccionado: any;

  constructor(private miServicioViaje: ViajesService) {
    //traigo los datos para confeccionar la tabla resumen choferes
    this.miServicioViaje.estadisticasChofer()
      .then(data => {
        this.datosTabla = data;
        console.log(data)
      })
  }

  ngOnInit() {
    this.cols = [
      { field: 'legajo', header: 'Legajo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'mail', header: 'Mail' },
      { field: 'viajes', header: 'Viajes' },
      { field: 'distancia', header: 'Distancia(km)' },
      { field: 'dinero', header: 'Dinero($)' }
    ];
  }

  onRowSelect(event) {
    //console.log(this.viajeSeleccionado.id_viaje);
    //this.display = true;
  }

  onRowUnselect(event) {

  }

  graficar() {
    /*
    //extraigo solo la cantidad
    this.viajesTotales.forEach(element => {
      this.viajes.push(element.cantidad)
    });
    //invierto para mostrar en orden
    this.viajes = this.viajes.reverse();
    //cargo el grafico
    this.datosGrafico1 = {
      labels: ['Pendiente', 'Aceptado', 'En viaje', 'Finalizado', 'Cancelado por chofer', 'Cancelado por cliente'],
      datasets: [
        {
          data: this.viajes,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#45FE14",
            "#21EFE7",
            "#123E14"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    }
    //limpio la variable para que al llamar a la funcion varias veces se redibuje correctamente y no se multiplique
    this.viajes = [];
    this.miServicioViaje.traerCantidadDeViajes()
      .then(data => {
        this.viajesTotales = data;
      })*/
  }

}