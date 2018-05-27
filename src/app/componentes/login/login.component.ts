import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any;

  constructor(private miHttp: MiHttpService) {
    this.miHttp.httpGetP('/traerTodosLosUsuarios')
      .then(data => {
        this.usuarios = data;
        console.log(data);
      })
  }

  ngOnInit() {
  }

}
