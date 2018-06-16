import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private miHttp: MiHttpService) { }

  crearToken(datos): Promise<any> {
    return this.miHttp.httpPostP('crearToken', datos)
      .then(data => {
        console.log(data)
        return (data);
      })
  }

}
