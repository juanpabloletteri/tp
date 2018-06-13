import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { EncargadoService } from '../../servicios/encargado.service';
import { Encargado } from '../../clases/encargado';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-encargado',
  templateUrl: './alta-encargado.component.html',
  styleUrls: ['./alta-encargado.component.css']
})
export class AltaEncargadoComponent implements OnInit {

  userform: FormGroup;
  description: string;

  constructor(private fb: FormBuilder, private miServicioEncargado: EncargadoService, private miEncargado: Encargado, private location: Location) { }


  ngOnInit() {
    this.userform = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'mail': new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])), //o se puede usar Validators.email
      'dni': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(8)])),
      'telefono': new FormControl('', Validators.required),
      'legajo': new FormControl('', Validators.required),
      'description': new FormControl('')
    });
  }

  onSubmit(value: string) {
    this.miEncargado.nombre = this.userform.value.nombre;
    this.miEncargado.apellido = this.userform.value.apellido;
    this.miEncargado.mail = this.userform.value.mail;
    this.miEncargado.dni = this.userform.value.dni;
    this.miEncargado.telefono = this.userform.value.telefono;
    this.miEncargado.legajo = this.userform.value.legajo;
    this.miEncargado.password = 'uberto' + this.miEncargado.dni;
    this.miEncargado.tipo = 1;

    this.miServicioEncargado.agregarEncargado(this.miEncargado)
      .then(data => {
        swal(
          'Felicidades!',
          'Encargado agregado correctamente',
          'success'
        )
      })
  }

  volver() {
    this.location.back();
  }

}
