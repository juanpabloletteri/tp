import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public rute: Router, private miViaje: Viaje, private miServicioViaje: ViajesService, private datosUsuario: DatosUsuarioService) {

    this.tipo = this.datosUsuario.getTipo();
    ///cambiar despues
    this.miServicioViaje.setFormaPago('efectivo');
    this.miServicioViaje.setFecha('10/11/1981');
  }

  ngOnInit() {
  }

  viaje() {
    //SI ESTA ACTIVO EL ENCARGADO
    if (this.tipo == 1) {
      this.miServicioViaje.setIdEncargado(this.datosUsuario.getIdUsuario());
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
