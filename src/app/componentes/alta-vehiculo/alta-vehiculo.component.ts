import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Vehiculo } from '../../clases/vehiculo';
import { ChoferService } from '../../servicios/chofer.service';
import { Chofer } from '../../clases/chofer';
import { SelectItem } from 'primeng/api';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-vehiculo',
  templateUrl: './alta-vehiculo.component.html',
  styleUrls: ['./alta-vehiculo.component.css']
})
export class AltaVehiculoComponent implements OnInit {

  userform: FormGroup;
  description: string;
  aire: SelectItem[];
  fumar: SelectItem[];
  baul: SelectItem[];

  cols: any[];
  datosTabla: any = null;
  choferSeleccionado: Chofer = null;

  constructor(private fb: FormBuilder, private miServicioVehiculo: VehiculosService, private miVehiculo: Vehiculo, private miServicioChofer: ChoferService, miChofer: Chofer) {

    this.aire = [
      { label: 'Con Aire', value: 1 },
      { label: 'Sin Aire', value: 0 }
    ];
    this.fumar = [
      { label: 'Fumador', value: 1 },
      { label: 'No Fumador', value: 0 }
    ];
    this.baul = [
      { label: 'Con Baul', value: 1 },
      { label: 'Sin Baul', value: 0 }
    ];
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'marca': new FormControl('', Validators.required),
      'modelo': new FormControl('', Validators.required),
      'anio': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(4)])),
      'fumar': new FormControl('', Validators.required),
      'aire': new FormControl('', Validators.required),
      'baul': new FormControl('', Validators.required)
    });
    this.userform.reset();
    /////////////////
    this.datosTabla = null;
    //CHOFERES
    //cargo en datosTabla a los clientes
    this.miServicioChofer.traerTodosLosChoferesLibres()
      .then(data => {
        this.datosTabla = data;
      })
    //nombro las columnas segun lo que quiero mostrar de clientes
    //field es el nombre que trae el campo de la base
    this.cols = [
      { field: 'legajo', header: 'Legajo' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'mail', header: 'Mail' }
    ];
  }

  onRowSelect(event) {
    console.log(this.choferSeleccionado.nombre);
  }

  onRowUnselect(event) {

  }

  onSubmit(value: string) {
    this.miVehiculo.marca = this.userform.value.marca;
    this.miVehiculo.modelo = this.userform.value.modelo;
    this.miVehiculo.anio = this.userform.value.anio;
    this.miVehiculo.fumar = this.userform.value.fumar;
    this.miVehiculo.aire = this.userform.value.aire;
    this.miVehiculo.baul = this.userform.value.baul;

    if (this.choferSeleccionado == null) {
      swal("Por favor seleccione un chofer para asignar al vehiculo")
      return 1;
    }
    else {
      /////////
      this.miVehiculo.id_chofer = this.choferSeleccionado.id_chofer;
      /////////
      this.miServicioVehiculo.agregarVehiculo(this.miVehiculo)
        .then(data => {
          swal(
            'Felicidades!',
            'Vehiculo agregado correctamente',
            'success'
          )
          this.userform.reset();
        })
    }


  }

}
