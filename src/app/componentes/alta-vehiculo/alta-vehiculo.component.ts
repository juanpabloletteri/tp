import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Vehiculo } from '../../clases/vehiculo';
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

  constructor(private fb: FormBuilder, private miServicioVehiculo: VehiculosService, private miVehiculo: Vehiculo) {

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
  }

  onSubmit(value: string) {
    this.miVehiculo.marca = this.userform.value.marca;
    this.miVehiculo.modelo = this.userform.value.modelo;
    this.miVehiculo.anio = this.userform.value.anio;
    this.miVehiculo.fumar = this.userform.value.fumar;
    this.miVehiculo.aire = this.userform.value.aire;
    this.miVehiculo.baul = this.userform.value.baul;

    this.miVehiculo.id_chofer = 0;

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
