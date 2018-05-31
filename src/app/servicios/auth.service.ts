import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: AuthService) { }

  canActivate(route, state): boolean {

    return true;

  }



}
