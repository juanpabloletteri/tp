import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-viajes-encargado-clientes',
  templateUrl: './listado-viajes-encargado-clientes.component.html',
  styleUrls: ['./listado-viajes-encargado-clientes.component.css']
})
export class ListadoViajesEncargadoClientesComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  id_chofer: number;
  viajeSeleccionado: Viaje;
  estadoViaje: any;

  costo: string;
  distancia: string;

  constructor(private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService) {

    this.id_chofer = this.datosUsuario.getIdUsuario();
    this.miServicioViaje.traerTodosLosviajesConClientes()
      .then(data => {
        this.datosTabla = data;
      })

  }

  ngOnInit() {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'mail', header: 'Mail' },
      { field: 'inicio', header: 'Inicio' },
      { field: 'destino', header: 'Destino' },
      { field: 'estado', header: 'Estado' }
    ];
    this.estadoViaje = [
      { label: 'Ver Todos', value: null },
      { label: 'Pendientes', value: '0' },
      { label: 'Realizados', value: '1' },
    ];
  }

  onRowSelect(event) {
    console.log(this.viajeSeleccionado.id_viaje);
    this.distancia = (this.viajeSeleccionado.distancia / 1000) + ' km';
    this.costo = '$ ' + (this.viajeSeleccionado.costo);
  }

  onRowUnselect(event) {

  }

}

