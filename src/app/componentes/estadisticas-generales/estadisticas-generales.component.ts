import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../servicios/viajes.service';

@Component({
  selector: 'app-estadisticas-generales',
  templateUrl: './estadisticas-generales.component.html',
  styleUrls: ['./estadisticas-generales.component.css']
})
export class EstadisticasGeneralesComponent implements OnInit {

  datosGrafico1: any;
  datosClientes: any;
  datosChoferes: any;
  clienteSeleccionado: any;
  choferSeleccionado: any;
  cols1: any;
  cols2: any;

  viajesTotales: any;
  viajes: string[] = [];

  distancia: number;
  dinero: number;

  constructor(private miServicioViaje: ViajesService) {
    //traigo todos los viajes separados por cantidad
    this.miServicioViaje.traerCantidadDeViajes()
      .then(data => {
        this.viajesTotales = data;
      })
    //traigo el total de metros recorridos (consulta realizada sobre viajes terminados)
    this.miServicioViaje.traerMetrosRecorridos()
      .then(data => {
        this.distancia = data[0]['distancia'];
        //console.log(data)
      })
    //traigo el total de dinero ganado (consulta realizada sobre viajes terminados)
    this.miServicioViaje.traerDineroGanado()
      .then(data => {
        this.dinero = data[0]['costo'];
        //console.log(data)
      })
    //traigo los datos para confeccionar la tabla resumen clientes
    this.miServicioViaje.estadisticasCliente()
      .then(data => {
        this.datosClientes = data;
        console.log(data)
      })
    //traigo los datos para confeccionar la tabla resumen choferes
    this.miServicioViaje.estadisticasChofer()
      .then(data => {
        this.datosChoferes = data;
        console.log(data)
      })
  }

  ngOnInit() {
    //columnas de la tabla resumen clientes
    this.cols1 = [
      { field: 'id_cliente', header: 'N° cliente' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'viajes', header: 'Viajes' },
      { field: 'distancia', header: 'Distancia(km)' },
      { field: 'dinero', header: 'Dinero($)' }
    ];
    //columnas de la tabla resumen choferes
    this.cols2 = [
      { field: 'legajo', header: 'Legajo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
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
