import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  mail: string;
  password: string;
  tipo: number;

  constructor(private miHttp: MiHttpService, public rute: Router) {
  }

  ngOnInit() {
  }

  Ingresar() {
    switch (this.tipo) {
      case 0: {
        console.log("chofer");
        this.rute.navigate(['chofer']);
        break;
      }
      case 1: {
        console.log("cliente");
        this.rute.navigate(['cliente']);
        break;
      }
      default: {
        console.log("encargado");
        this.rute.navigate(['encargado']);
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
