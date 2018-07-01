import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: FormGroup;

  mail: string;
  password: string;

  constructor(private fb: FormBuilder, public rute: Router, private miServicioLogin: LoginService) {
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'mail': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(value: string) {
    console.log(value);
    debugger
    this.mail = this.userform.value.mail;
    this.password = this.userform.value.password;
    //LA API POR INTERMEDIO DEL SERVICIO ME DEVUELVE ERROR O EL TOKEN
    this.miServicioLogin.verificarusuario({ mail: this.mail, password: this.password })
      .then(data => {
        if (data == "error") {
          swal("Usuario o contraseña no validas");
        }
        else {
          //guardo token en local storage
          localStorage.setItem('token', data);
          //decodifico token
          let payload = data.split('.')[1];
          let pay2 = payload.replace('-', '+').replace('_', '/');
          let datos = JSON.parse(atob(pay2));
          //verifico donde redirijo
          if (datos['data']['tipo'] == 1) {
            this.rute.navigate(['encargado']);
          }
          else if (datos['data']['tipo'] == 2) {
            this.rute.navigate(['chofer']);
          }
          else if (datos['data']['tipo'] == 3) {
            this.rute.navigate(['cliente']);
          }
        }
      })
  }

  registrar() {
    this.rute.navigate(['registro']);
  }

  /////////botones test///////
  test(tipo) {
    if (tipo == 'encargado') {
      this.mail = 'encargado';
      this.password = '1';
    }
    else if (tipo == 'chofer') {
      this.mail = 'chofer';
      this.password = '2';
    }
    else {
      this.mail = 'cliente';
      this.password = '3';
    }
    this.miServicioLogin.verificarusuario({ mail: this.mail, password: this.password })
      .then(data => {
        //guardo token en local storage
        localStorage.setItem('token', data);
        //decodifico token
        let payload = data.split('.')[1];
        let pay2 = payload.replace('-', '+').replace('_', '/');
        let datos = JSON.parse(atob(pay2));
        //verifico donde redirijo
        if (datos['data']['tipo'] == 1) {
          this.rute.navigate(['encargado']);
        }
        else if (datos['data']['tipo'] == 2) {
          this.rute.navigate(['chofer']);
        }
        else if (datos['data']['tipo'] == 3) {
          this.rute.navigate(['cliente']);
        }
      })

  }
}
