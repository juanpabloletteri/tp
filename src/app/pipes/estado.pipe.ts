import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 0) {
      return "Pendiente";
    }
    else if (value == 1) {
      return "Realizado";
    }
    else {
      return value;
    }
  }

}
