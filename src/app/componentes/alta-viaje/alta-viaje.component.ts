import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../clases/viaje';
import { ViajesService } from '../../servicios/viajes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-viaje',
  templateUrl: './alta-viaje.component.html',
  styleUrls: ['./alta-viaje.component.css']
})
export class AltaViajeComponent implements OnInit {

  constructor(private miViaje: Viaje, private miServicioViaje: ViajesService) { }

  ngOnInit() {
  }

  viaje() {
    if (this.miServicioViaje.getDistancia() == null) {
      swal("falta mapa");
      return 1;
    }
    else if (this.miServicioViaje.getIdVehiculo() == null) {
      swal("falta vehiculo");
      return 1;
    }

    console.log("miViaje:" + this.miViaje);
    //al cargar el servicio automaticamente carga la variable miViaje
    this.miServicioViaje.agregarViaje(this.miViaje)
      .then(data => {
        console.log(data);
      })

  }

}
