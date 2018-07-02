import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  id_usuario: number;
  nombre: string;
  apellido: string;
  mail: string;
  tipo: number;

  constructor() { }

  /////////////////////////
  setIdUsuario(data) {
    this.id_usuario = data;
  }
  setMail(data) {
    this.mail = data;
  }
  setNombre(data) {
    this.nombre = data;
  }
  setApellido(data) {
    this.apellido = data;
  }
  setTipo(data) {
    this.tipo = data;
  }

  /////////////////////////
  getIdUsuario() {
    return this.id_usuario;
  }
  getMail() {
    return this.mail;
  }
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getTipo() {
    return this.tipo;
  }
}
