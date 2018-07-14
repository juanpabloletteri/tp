import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 0) {
      return "Pendiente";
    }
    else if (value == -1) {
      return "Aceptado";
    }
    else if (value == -2) {
      return "En viaje";
    }
    else if (value == -3) {
      return "Realizado";
    }
    else if (value == -4) {
      return "Cancelado por chofer";
    }
    else if (value == -5) {
      return "Cancelado por cliente";
    }
    else {
      return value;
    }
  }

}
