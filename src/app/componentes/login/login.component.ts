import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  mail: string;
  password: string;
  tipo: number;

  constructor(private miHttp: MiHttpService, public rute: Router, private miServicioLogin: LoginService) {
  }

  ngOnInit() {
  }

  Ingresar() {
    switch (this.tipo) {
      case 0: {
        console.log("chofer");
        this.rute.navigate(['chofer']);
        this.miServicioLogin.crearToken({ tipo: 'chofer' })
          .then(data => {
            localStorage.setItem('token', data);
          })
        break;
      }
      case 1: {
        console.log("cliente");
        this.rute.navigate(['cliente']);
        this.miServicioLogin.crearToken({ tipo: 'cliente' })
          .then(data => {
            localStorage.setItem('token', data);
          })
        break;
      }
      default: {
        console.log("encargado");
        this.rute.navigate(['encargado']);
        this.miServicioLogin.crearToken({ tipo: 'juuan' })
          .then(data => {
            localStorage.setItem('token', data);
          })
        break;
      }
    }
  }

  Test(tipo) {
    if (tipo == 'chofer') {
      this.mail = 'chofer@gmail.com';
      this.password = '1';
      this.tipo = 0;
    }
    else if (tipo == 'cliente') {
      this.mail = 'cliente@gmail.com';
      this.password = '1';
      this.tipo = 1;
    }
    else {
      this.mail = 'encargado@gmail.com';
      this.password = '1';
      this.tipo = 2;
    }
  }
}
