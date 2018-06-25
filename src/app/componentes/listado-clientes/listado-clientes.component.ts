import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clases/cliente';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  titulo: string;
  clienteSeleccionado: Cliente = null;
  display: boolean = false;

  constructor(private miCliente: Cliente, private miServicioCliente: ClienteService) { }

  ngOnInit() {
    this.datosTabla = null;
    //ClienteES
    //cargo en datosTabla a los clientes
    this.miServicioCliente.traerTodosLosClientes()
      .then(data => {
        this.datosTabla = data;
      })
    //nombro las columnas segun lo que quiero mostrar de clientes
    //field es el nombre que trae el campo de la base
    this.titulo = 'Listado de Clientes';
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'dni', header: 'Dni' },
      { field: 'domicilio', header: 'Domicilio' }
    ];
  }

   onRowSelect(event) {
    console.log(this.clienteSeleccionado.nombre);
    this.display = true;
  }

  onRowUnselect(event) {

  }

  modificar() {
    this.display = false;
    console.log(this.clienteSeleccionado);
    this.miServicioCliente.modificarCliente(this.clienteSeleccionado);
  }

  eliminar() {
    this.display = false;
    console.log(this.clienteSeleccionado);
    this.miServicioCliente.borrarCliente(this.clienteSeleccionado.id_usuario);
    //vuelvo a cargar los usuarios
    this.datosTabla = null;
    this.miServicioCliente.traerTodosLosClientes()
      .then(data => {
        this.datosTabla = data;
      })
  }
}
