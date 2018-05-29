import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  constructor(private miServicioUsuario: UsuariosService, private miUsuario: Usuario) { }

  ngOnInit() {
    this.miServicioUsuario.traerTodosLosUsuarios();
  }

}
