import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encuesta } from '../../clases/encuesta';
import { EncuestaService } from '../../servicios/encuesta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  existe: boolean = true;

  constructor(private miEncuesta: Encuesta, private miServicioEncuesta: EncuestaService, private rute: Router) {

    this.miServicioEncuesta.traerEncuestaPorIdViaje(this.miServicioEncuesta.getIdViaje())
      .then(data => {
        if (data[0] != null) {
          //existe la encuesta
          this.miEncuesta = data[0];
          this.existe = true;
        }
        else {
          this.existe = false;
          this.miEncuesta.puntaje_viaje = 1;
          this.miEncuesta.puntaje_chofer = 1;
          this.miEncuesta.puntaje_vehiculo = 1;
          this.miEncuesta.pregunta1 = 1;
          this.miEncuesta.pregunta2 = 1;
          this.miEncuesta.pregunta3 = 1;
          this.miEncuesta.pregunta4 = 1;
          this.miEncuesta.observaciones = "";
        }
      });
  }

  ngOnInit() {

  }

  enviar() {

    this.miServicioEncuesta.agregarEncuesta(this.miEncuesta)
      .then(data => {
        //console.log(data);
        swal("Gracias por responder la encuesta!");
        this.rute.navigate(['cliente/viajes']);
      })
  }

}
