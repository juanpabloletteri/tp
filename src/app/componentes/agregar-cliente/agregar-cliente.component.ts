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
    this.miCliente.password = (this.miCliente.dni).toString();
  }

  ngOnInit() {
    //console.log(this.miServicioCliente.traerTodosLosClientes());
  }

}
