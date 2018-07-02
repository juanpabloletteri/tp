import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from '../../servicios/cliente.service';
import { Cliente } from '../../clases/cliente';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  userform: FormGroup;
  description: string;

  constructor(private fb: FormBuilder, private miServicioCliente: ClienteService, private miCliente: Cliente, public rute: Router) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'mail': new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])), //o se puede usar Validators.email
      'dni': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(8)])),
      'telefono': new FormControl('', Validators.required),
      'domicilio': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'password2': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  onSubmit(value: string) {
    if (this.userform.value.password == this.userform.value.password2) {
      this.miCliente.nombre = this.userform.value.nombre;
      this.miCliente.apellido = this.userform.value.apellido;
      this.miCliente.mail = this.userform.value.mail;
      //this.miCliente.dni = this.userform.value.dni;
      //this.miCliente.telefono = this.userform.value.telefono;
      //this.miCliente.domicilio = this.userform.value.domicilio;
      this.miCliente.dni = 0;
      this.miCliente.telefono = 0;
      this.miCliente.domicilio = 'asd';
      this.miCliente.password = 'uberto' + this.miCliente.dni;
      this.miCliente.tipo = 3;

      this.miServicioCliente.agregarCliente(this.miCliente)
        .then(data => {
          console.log(data);
          ////////MAIL DUPLICADO///////
          if (data == "Mail en uso") {
            swal({
              type: 'error',
              title: 'Oops...',
              text: data,
            })
            return 1;
          }
          //////MAIL SIN USAR - CREA LA CUENTA////////
          else {
            swal(
              'Felicidades!',
              'Usuario creado correctamente!',
              'success'
            )
            this.rute.navigate(['']);
          }
        })
      /////////
    }
    else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Contraseñas no identicas!',
      })

    }
  }

}
