import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ViajesService } from '../../servicios/viajes.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  grafico1: boolean = false;
  grafico2: boolean = false;
  grafico3: boolean = false;

  datosGrafico1: any;

  viajesTotales: any;
  viajes: string[] = [];

  constructor(private miServicioViaje: ViajesService) {

    this.miServicioViaje.traerCantidadDeViajes()
      .then(data => {
        this.viajesTotales = data;
      })
  }

  ngOnInit() {
  }

  graficar() {
    //variables de ocultacion
    this.grafico1 = true;
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
      })
  }

}
