import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private authService: AutenticacionService) { }

  canActivate(route, state): boolean {
    //aca iria la logica de la autenticacion, con true accede a la navegacion, con false no
    return true;
  }

}
