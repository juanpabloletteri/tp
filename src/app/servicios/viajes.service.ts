import { Injectable } from '@angular/core';
import { Viaje } from '../clases/viaje';
import { MiHttpService } from './mi-http.service';
import { promise } from 'protractor';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private miHttp: MiHttpService, private miViaje: Viaje) { }

  //////////////////////////////
  setIdEncargado(data) {
    this.miViaje.id_encargado = data;
  }
  setIdCliente(data) {
    this.miViaje.id_cliente = data;
  }
  setIdChofer(data) {
    this.miViaje.id_chofer = data;
  }
  setIdVehiculo(data) {
    this.miViaje.id_vehiculo = data;
  }
  setLatitudInicio(data) {
    this.miViaje.latitud_inicio = data;
  }
  setLongitudInicio(data) {
    this.miViaje.longitud_inicio = data;
  }
  setLatitudDestino(data) {
    this.miViaje.latitud_destino = data;
  }
  setLongitudDestino(data) {
    this.miViaje.longitud_destino = data;
  }
  setInicio(data) {
    this.miViaje.inicio = data;
  }
  setDestino(data) {
    this.miViaje.destino = data;
  }
  setDistancia(data) {
    this.miViaje.distancia = data;
  }
  setCosto(data) {
    this.miViaje.costo = data;
  }
  setFormaPago(data) {
    this.miViaje.forma_pago = data;
  }
  setFechaSalida(data) {
    this.miViaje.fecha_salida = data;
  }
  setFechaLlegada(data) {
    this.miViaje.fecha_llegada = data;
  }
  setEstado(data) {
    this.miViaje.estado = data;
  }
  ///////////////////////////////
  getIdViaje() {
    return this.miViaje.id_viaje;
  }
  getIdEncargado() {
    return this.miViaje.id_encargado;
  }
  getIdCliente() {
    return this.miViaje.id_cliente;
  }
  getIdChofer() {
    return this.miViaje.id_chofer;
  }
  getIdVehiculo() {
    return this.miViaje.id_vehiculo;
  }
  getLatitudInicio() {
    return this.miViaje.latitud_inicio;
  }
  getLongitudInicio() {
    return this.miViaje.longitud_inicio;
  }
  getLatitudDestino() {
    return this.miViaje.latitud_destino;
  }
  getLongitudDestino() {
    return this.miViaje.longitud_destino;
  }
  getInicio() {
    return this.miViaje.inicio;
  }
  getDestino() {
    return this.miViaje.destino;
  }
  getDistancia() {
    return this.miViaje.distancia;
  }
  getCosto() {
    return this.miViaje.costo;
  }
  getFormaPago() {
    return this.miViaje.forma_pago;
  }
  getFechaSalida() {
    return this.miViaje.fecha_salida;
  }
  getFechaLlegada() {
    return this.miViaje.fecha_llegada;
  }
  getEstado() {
    return this.miViaje.estado;
  }

  ////////////////
  traerTodosLosviajes(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosviajes')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerTodosLosviajesConClientes(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosviajesConClientes')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerTodosLosviajesConChoferes(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosviajesConChoferes')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarViaje(data): Promise<any> {
    return this.miHttp.httpPostP('agregarViaje', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerViajePorId(data): Promise<any> {
    return this.miHttp.httpPostP('traerViajePorId', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerViajesPorChofer(data): Promise<any> {
    return this.miHttp.httpPostP('traerViajesPorChofer', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerViajesPorCliente(data): Promise<any> {
    return this.miHttp.httpPostP('traerViajesPorCliente', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarViaje(data): Promise<any> {
    return this.miHttp.httpPostP('modificarViaje', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  cambiarEstadoViaje(id, estado): Promise<any> {
    return this.miHttp.httpPostP('cambiarEstadoViaje', { id: id, estado: estado })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarViaje(data): Promise<any> {
    return this.miHttp.httpPostP('borrarViaje', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  ///////ENCUESTAS/////////
  traerCantidadDeViajes(): Promise<any> {
    return this.miHttp.httpGetP('traerCantidadDeViajes')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerMetrosRecorridos(): Promise<any> {
    return this.miHttp.httpGetP('traerMetrosRecorridos')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerDineroGanado(): Promise<any> {
    return this.miHttp.httpGetP('traerDineroGanado')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  estadisticasCliente(): Promise<any> {
    return this.miHttp.httpGetP('estadisticasCliente')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  estadisticasChofer(): Promise<any> {
    return this.miHttp.httpGetP('estadisticasChofer')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  //estadisticas cliente
  traerCantidadDeViajesPorCliente(data): Promise<any> {
    return this.miHttp.httpPostP('traerCantidadDeViajesPorCliente', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  //estadisticas chofer
  traerCantidadDeViajesPorChofer(data): Promise<any> {
    return this.miHttp.httpPostP('traerCantidadDeViajesPorChofer', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
}
