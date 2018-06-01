import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { Objeto } from '../../clases/objeto';
//import { ChoferService } from '../../servicios/chofer.service';
import { ClienteService } from '../../servicios/cliente.service';
//import { EncargadoService } from '../../servicios/encargado.service';

import { Vehiculo } from '../../clases/vehiculo';
import { VehiculosService } from '../../servicios/vehiculos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //el componente padre envia listado por @input() segun el codigo es 1-cliente 2-chofer o 3 encargado
  @Input() listado: number;
  titulo: string;

  constructor(private miServicioCliente: ClienteService, private miObjeto: Objeto,
    private miVehiculo: Vehiculo, private miServicioVehiculo: VehiculosService) {

    this.miObjeto.dni = 0;
  }

  ngOnInit() {
  }

  Agregar() {
    //sacar los puntos (.) del dni y pasarlo a numero
    this.miObjeto.dni = parseInt(this.miObjeto.dni.toString().replace(/\./g, ''));
    //sacar los (-) de telefono y pasarlo a numero
    this.miObjeto.telefono = parseInt(this.miObjeto.telefono.toString().replace(/\-/g, ''));
    //convertir el dni a string sin los puntos (.) y agregarle 'uberto' como password inicial
    this.miObjeto.password = 'uberto' + this.miObjeto.dni.toString().replace(/\./g, '');

    console.log(this.miObjeto);

    if (this.listado == 1) {
      this.miServicioCliente.agregarCliente(this.miObjeto);
    }
    else if (this.listado == 2) {
      // this.miServicioChofer.agregarChofer(this.miObjeto);
    }
    else {
      // this.miServicioEncargado.agregarEncargado(this.miObjeto);
    }

    //ver si lo dejo o lo borro, envia un dato de mas a la base en caso de ingresar un cliente luego de un chofer
    //this.miObjeto.domicilio = null;
    //this.miObjeto.legajo = null;
  }

  AgregarVehiculo() {
    this.miServicioVehiculo.agregarVehiculo(this.miVehiculo);
  }

  ngOnChanges(changes: SimpleChanges) {
    switch (this.listado) {
      case 1:
        this.titulo = 'CLIENTE';
        this.miObjeto.tipo = 3;
        break;
      case 2:
        this.titulo = 'CHOFER';
        this.miObjeto.tipo = 2;
        break;
      case 3:
        this.titulo = 'ENCARGADO';
        this.miObjeto.tipo = 1;
        break;
      default:
        this.titulo = 'VEHICULO';
        break;
    }


  }

}
