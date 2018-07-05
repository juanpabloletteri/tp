import { Injectable } from '@angular/core';
import { Encuesta } from '../clases/encuesta';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private miHttp: MiHttpService, private miEncuesta: Encuesta) { }

  /////////////////////////
  setIdEncuesta() {
    this.miEncuesta.id_encuesta;
  }
  setIdViaje(data) {
    this.miEncuesta.id_viaje = data;
  }
  setPuntajeViaje(data) {
    this.miEncuesta.puntaje_viaje = data;
  }
  setIdChofer(data) {
    this.miEncuesta.id_chofer = data;
  }
  setPuntajeChofer(data) {
    this.miEncuesta.puntaje_chofer = data;
  }
  setIdVehiculo(data) {
    this.miEncuesta.id_vehiculo = data;
  }
  setPuntajeVehiculo(data) {
    this.miEncuesta.puntaje_vehiculo = data;
  }
  setPregunta1(data) {
    this.miEncuesta.pregunta1 = data;
  }
  setPregunta2(data) {
    this.miEncuesta.pregunta2 = data;
  }
  setPregunta3(data) {
    this.miEncuesta.pregunta3 = data;
  }
  setPregunta4(data) {
    this.miEncuesta.pregunta4 = data;
  }
  setObservaciones(data) {
    this.miEncuesta.observaciones = data;
  }
  /////////////////////////
  getIdEncuesta() {
    return this.miEncuesta.id_encuesta;
  }
  getIdViaje() {
    return this.miEncuesta.id_viaje;
  }
  getPuntajeViaje() {
    return this.miEncuesta.puntaje_viaje;
  }
  getIdChofer() {
    return this.miEncuesta.id_chofer;
  }
  getPuntajeChofer() {
    return this.miEncuesta.puntaje_chofer;
  }
  getIdVehiculo() {
    return this.miEncuesta.id_vehiculo;
  }
  getPuntajeVehiculo() {
    return this.miEncuesta.puntaje_vehiculo;
  }
  getPregunta1() {
    return this.miEncuesta.pregunta1;
  }
  getPregunta2() {
    return this.miEncuesta.pregunta2;
  }
  getPregunta3() {
    return this.miEncuesta.pregunta3;
  }
  getPregunta4() {
    return this.miEncuesta.pregunta4;
  }
  getObservaciones() {
    return this.miEncuesta.observaciones;
  }
  ///////////////////////////////
  traerTodasLasEncuestas(): Promise<any> {
    return this.miHttp.httpGetP('traerTodasLasEncuestas')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarEncuesta(data): Promise<any> {
    return this.miHttp.httpPostP('agregarEncuesta', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerEncuestaPorIdViaje(data): Promise<any> {
    return this.miHttp.httpPostP('traerEncuestaPorIdViaje', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
}

