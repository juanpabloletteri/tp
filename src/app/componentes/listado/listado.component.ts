import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';
import { ChoferService } from '../../servicios/chofer.service';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { EncargadoService } from '../../servicios/encargado.service';

import { Objeto } from '../../clases/objeto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //el componente padre envia listado por @input() segun el codigo es 1-cliente 2-chofer o 3 vehiculo
  @Input() listado: number;

  cols: any[];
  datosTabla: any = null;
  titulo: string;

  constructor(private miServicioCliente: ClienteService, private miServicioChofer: ChoferService, private miServicioEncargado: EncargadoService,
    private miServicioVehiculo: VehiculosService, private miObjeto: Objeto) { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {

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
        this.datosTabla = null;
        //CHOFERES
        //cargo en datosTabla a los clientes
        this.miServicioChofer.traerTodosLosChoferes()
          .then(data => {
            this.datosTabla = data;
          })
        //nombro las columnas segun lo que quiero mostrar de clientes
        //field es el nombre que trae el campo de la base
        this.titulo = 'CHOFERES';
        this.cols = [
          { field: 'nombre', header: 'Nombre' },
          { field: 'apellido', header: 'Apellido' },
          { field: 'telefono', header: 'Telefono' },
          { field: 'dni', header: 'Dni' },
          { field: 'legajo', header: 'Legajo' }
        ];
        break;

      case 3:
        this.datosTabla = null;
        //CHOFERES
        //cargo en datosTabla a los clientes
        this.miServicioEncargado.traerTodosLosEncargados()
          .then(data => {
            this.datosTabla = data;
          })
        //nombro las columnas segun lo que quiero mostrar de clientes
        //field es el nombre que trae el campo de la base
        this.titulo = 'ENCARGADOS';
        this.cols = [
          { field: 'nombre', header: 'Nombre' },
          { field: 'apellido', header: 'Apellido' },
          { field: 'telefono', header: 'Telefono' },
          { field: 'dni', header: 'Dni' },
          { field: 'legajo', header: 'Legajo' }
        ];
        break;

      default:
        this.miServicioVehiculo.traerTodosLosVehiculos()
          .then(data => {
            this.datosTabla = data;
          })

        this.titulo = 'VEHICULOS';
        this.cols = [
          { field: 'marca', header: 'Marca' },
          { field: 'modelo', header: 'Modelo' },
          { field: 'anio', header: 'Año' },
          { field: 'fumar', header: 'Fumar' },
          { field: 'aire', header: 'Aire' },
          { field: 'baul', header: 'Baul' }
        ];
        break;

    }
  }

}
