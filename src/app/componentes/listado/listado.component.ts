import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listado: number;

  cols: any[];
  datosTabla: any;
  titulo: string;

  constructor(private miServicioCliente: ClienteService) { }

  ngOnInit() {
    switch (this.listado) {
      case 1:
        //CLIENTES
        //cargo en datosTabla a los clientes
        this.miServicioCliente.traerTodosLosClientes()
          .then(data => {
            this.datosTabla = data;
          })
        //nombro las columnas segun lo que quiero mostrar de clientes
        //field es el nombre que trae el campo de la base
        this.titulo = 'CLIENTES';
        this.cols = [
          { field: 'nombre', header: 'Nombre' },
          { field: 'apellido', header: 'Apellido' },
          { field: 'telefono', header: 'Telefono' },
          { field: 'dni', header: 'Dni' },
          { field: 'domicilio', header: 'Domicilio' }
        ];
        break;
      case 2:
        this.cols = [
          { field: 'nombre', header: 'Nombre' },
          { field: 'apellido', header: 'Apellido' },
          { field: 'dni', header: 'Dni' },
          { field: 'legajo', header: 'Legajo' }
        ];
        break;
      default:

        break;

    }
  }

}
