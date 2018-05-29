import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { MiHttpService } from './mi-http.service';
import { promise } from 'protractor';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private miHttp: MiHttpService, private miUsuario: Usuario) { }

  /////////////////////////
  setMail(data) {
    this.miUsuario.mail = data;
  }
  setPassword(data) {
    this.miUsuario.password = data;
  }
  setNombre(data) {
    this.miUsuario.nombre = data;
  }
  setApellido(data) {
    this.miUsuario.apellido = data;
  }
  setDni(data) {
    this.miUsuario.dni = data;
  }
  setTelefono(data) {
    this.miUsuario.telefono = data;
  }
  setTipo(data) {
    this.miUsuario.tipo = data;
  }
  /////////////////////////
  getIdUsuario() {
    return this.miUsuario.mail;
  }
  getMail() {
    return this.miUsuario.mail;
  }
  getPassword() {
    return this.miUsuario.password;
  }
  getNombre() {
    return this.miUsuario.nombre;
  }
  getApellido() {
    return this.miUsuario.apellido;
  }
  getDni() {
    return this.miUsuario.dni;
  }
  getTelefono() {
    return this.miUsuario.telefono;
  }
  getTipo() {
    return this.miUsuario.tipo;
  }
  ///////////////////////////////
  getUsuarios(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosUsuarios')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarUsuario(data): Promise<any> {
    return this.miHttp.httpPostP('agregarUsuario', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerUsuarioPorId(data): Promise<any> {
    return this.miHttp.httpPostP('traerUsuarioPorId', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarUsuario(data): Promise<any> {
    return this.miHttp.httpPostP('modificarUsuario', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarUsuario(data): Promise<any> {
    return this.miHttp.httpPostP('borrarUsuario', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
}
