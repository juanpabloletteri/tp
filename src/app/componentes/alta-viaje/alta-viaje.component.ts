import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../clases/cliente';
import { ClienteService } from '../../servicios/cliente.service';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-viaje',
  templateUrl: './alta-viaje.component.html',
  styleUrls: ['./alta-viaje.component.css']
})
export class AltaViajeComponent implements OnInit {

  tipo: number;
  cols: any[];
  clienteSeleccionado: Cliente = null;
  datosTabla: any = null;

  constructor(public rute: Router, private miViaje: Viaje, private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService, private miServicioCliente: ClienteService) {

    this.tipo = this.datosUsuario.getTipo();
    ///cambiar despues
    this.miServicioViaje.setFormaPago('efectivo');
    this.miServicioViaje.setFecha('10/11/1981');
    if (this.tipo == 1) {
      this.cols = [
        { field: 'nombre', header: 'Nombre' },
        { field: 'apellido', header: 'Apellido' },
        { field: 'telefono', header: 'Telefono' },
        { field: 'dni', header: 'Dni' },
        { field: 'domicilio', header: 'Domicilio' }
      ];
      this.miServicioCliente.traerTodosLosClientes()
        .then(data => {
          this.datosTabla = data;
        })
    }

  }

  onRowSelect(event) {
    console.log(this.clienteSeleccionado.nombre);
  }

  ngOnInit() {
  }

  viaje() {
    //SI ESTA ACTIVO EL ENCARGADO
    if (this.tipo == 1) {
      this.miServicioViaje.setIdEncargado(this.datosUsuario.getIdUsuario());
      this.miServicioViaje.setIdCliente(this.clienteSeleccionado.id_usuario);
    }
    //SI EL TIPO ES CLIENTE
    else if (this.tipo == 3) {
      this.miServicioViaje.setIdEncargado(0);
      this.miServicioViaje.setIdCliente(this.datosUsuario.getIdUsuario());
    }
    //VERIFICACION POR FALTA DE DATOS
    if (this.miServicioViaje.getDistancia() == null) {
      swal("falta mapa");
      return 1;
    }
    else if (this.miServicioViaje.getIdVehiculo() == null) {
      swal("falta vehiculo");
      return 1;
    }
    else if (this.miServicioViaje.getIdCliente() == null) {
      swal("falta cliente");
      return 1;
    }

    console.log("miViaje:" + this.miViaje);
    //al cargar el servicio automaticamente carga la variable miViaje
    this.miServicioViaje.agregarViaje(this.miViaje)
      .then(data => {
        console.log(data);
        this.miServicioViaje = null;

        //SI ESTA ACTIVO EL ENCARGADO
        if (this.tipo == 1) {
          this.rute.navigate(['encargado']);
        }
        //SI EL TIPO ES CLIENTE
        else if (this.tipo == 3) {
          this.rute.navigate(['cliente']);
        }
      })

  }

}
