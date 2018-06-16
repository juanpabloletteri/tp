import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ChoferService } from '../../servicios/chofer.service';
import { Chofer } from '../../clases/chofer';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-chofer',
  templateUrl: './alta-chofer.component.html',
  styleUrls: ['./alta-chofer.component.css']
})
export class AltaChoferComponent implements OnInit {

  userform: FormGroup;
  description: string;

  constructor(private fb: FormBuilder, private miServicioChofer: ChoferService, private miChofer: Chofer) { }

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
    this.miChofer.nombre = this.userform.value.nombre;
    this.miChofer.apellido = this.userform.value.apellido;
    this.miChofer.mail = this.userform.value.mail;
    this.miChofer.dni = this.userform.value.dni;
    this.miChofer.telefono = this.userform.value.telefono;
    this.miChofer.legajo = this.userform.value.legajo;
    this.miChofer.password = 'uberto' + this.miChofer.dni;
    this.miChofer.tipo = 2;

    this.miServicioChofer.agregarChofer(this.miChofer)
      .then(data => {
        swal(
          'Felicidades!',
          'Chofer agregado correctamente',
          'success'
        )
      })
  }

}

