import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from '../../servicios/cliente.service';
import { Cliente } from '../../clases/cliente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  userform: FormGroup;
  description: string;

  constructor(private fb: FormBuilder, private miServicioCliente: ClienteService, private miCliente: Cliente) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'mail': new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])), //o se puede usar Validators.email
      'dni': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(8)])),
      'telefono': new FormControl('', Validators.required),
      'domicilio': new FormControl('', Validators.required),
      'description': new FormControl('')
    });
  }

  onSubmit(value: string) {
    this.miCliente.nombre = this.userform.value.nombre;
    this.miCliente.apellido = this.userform.value.apellido;
    this.miCliente.mail = this.userform.value.mail;
    this.miCliente.dni = this.userform.value.dni;
    this.miCliente.telefono = this.userform.value.telefono;
    this.miCliente.domicilio = this.userform.value.domicilio;
    this.miCliente.password = 'uberto' + this.miCliente.dni;
    this.miCliente.tipo = 3;

    this.miServicioCliente.agregarCliente(this.miCliente)
      .then(data => {
        swal(
          'Felicidades!',
          'Cliente agregado correctamente',
          'success'
        )
      })


  }

}
