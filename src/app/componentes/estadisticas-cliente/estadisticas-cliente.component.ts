import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../servicios/viajes.service';

@Component({
  selector: 'app-estadisticas-cliente',
  templateUrl: './estadisticas-cliente.component.html',
  styleUrls: ['./estadisticas-cliente.component.css']
})
export class EstadisticasClienteComponent implements OnInit {

  datosTabla: any;
  cols: any;
  clienteSeleccionado: any;

  viajesTotales: any = null;
  viajes: string[] = [];
  datosGrafico1: any;

  constructor(private miServicioViaje: ViajesService) {
    //traigo los datos para confeccionar la tabla resumen clientees
    this.miServicioViaje.estadisticasCliente()
      .then(data => {
        this.datosTabla = data;
        console.log(data)
      })
  }

  ngOnInit() {
    this.cols = [
      { field: 'id_cliente', header: 'N° cliente' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'viajes', header: 'Viajes' },
      { field: 'distancia', header: 'Distancia(km)' },
      { field: 'dinero', header: 'Dinero($)' }
    ];
  }

  onRowSelect(event) {
    this.miServicioViaje.traerCantidadDeViajesPorCliente(this.clienteSeleccionado.id_cliente)
      .then(data => {
        this.viajesTotales = data;
      })
  }

  onRowUnselect(event) {

  }

  graficar() {
    //extraigo solo la cantidad
    this.viajesTotales.forEach(element => {
      this.viajes.push(element.cantidad)
    });
    //invierto para mostrar en orden
    this.viajes = this.viajes.reverse();
    //cargo el grafico
    this.datosGrafico1 = {
      labels: ['Pendiente', 'Aceptado', 'En viaje', 'Finalizado', 'Cancelado por cliente', 'Cancelado por cliente'],
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
    this.miServicioViaje.traerCantidadDeViajesPorCliente(this.clienteSeleccionado.id_cliente)
      .then(data => {
        this.viajesTotales = data;
      })
  }

}