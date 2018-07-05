import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../../clases/encuesta';
import { EncuestaService } from '../../servicios/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {


  constructor(private miEncuesta: Encuesta, private miServicioEncuesta: EncuestaService) {

    this.miEncuesta.puntaje_viaje = 1;
    this.miEncuesta.puntaje_chofer = 1;
    this.miEncuesta.puntaje_vehiculo = 1;
    this.miEncuesta.pregunta1 = 1;
    this.miEncuesta.pregunta2 = 1;
    this.miEncuesta.pregunta3 = 1;
    this.miEncuesta.pregunta4 = 1;
    this.miEncuesta.observaciones = "";

  }

  ngOnInit() {
    console.log("-------------")
  }

  enviar() {
    console.log(this.miEncuesta);
    this.miServicioEncuesta.agregarEncuesta(this.miEncuesta)
      .then(data => {
        console.log(data);
      })
  }

}
