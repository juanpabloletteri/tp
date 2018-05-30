import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clases/cliente';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  constructor(private miServicioCliente: ClienteService, private miCliente: Cliente) {
    this.miCliente.tipo = 3;
    this.miCliente.dni = 0;
  }

  ngOnInit() {
    //console.log(this.miServicioCliente.traerTodosLosClientes());
  }

  Agregar() {
    //sacar los puntos (.) del dni y pasarlo a numero
    this.miCliente.dni = parseInt(this.miCliente.dni.toString().replace(/\./g, ''));
    //sacar los (-) de telefono y pasarlo a numero
    this.miCliente.telefono = parseInt(this.miCliente.telefono.toString().replace(/\-/g, ''));
    //convertir el dni a string sin los puntos (.) y agregarle 'uberto' como password inicial
    this.miCliente.password = 'uberto' + this.miCliente.dni.toString().replace(/\./g, '');

    console.log(this.miCliente);
    this.miServicioCliente.agregarCliente(this.miCliente);
  }

}
