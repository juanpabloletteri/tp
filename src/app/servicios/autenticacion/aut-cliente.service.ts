import { Injectable } from '@angular/core';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutClienteService {

  constructor(private datosUsuario: DatosUsuarioService) { }

  canActivate(route, state): boolean {
    var aprobacion = false;
    //capturo token del local storage
    let data = localStorage.getItem('token');
    //decodifico token
    let payload = data.split('.')[1];
    let pay2 = payload.replace('-', '+').replace('_', '/');
    let datos = JSON.parse(atob(pay2));
    //cargo el servicio con los datos del usuario
    this.datosUsuario.setIdUsuario(datos['data']['id_usuario']);
    this.datosUsuario.setNombre(datos['data']['nombre']);
    this.datosUsuario.setApellido(datos['data']['apellido']);
    this.datosUsuario.setMail(datos['data']['mail']);
    this.datosUsuario.setTipo(datos['data']['tipo']);
    //comparo y si el tipo coincide acepto
    if (datos['data']['tipo'] == 3) {
      aprobacion = true;
    }
    return aprobacion;
  }

}
