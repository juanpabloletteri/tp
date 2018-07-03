import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distancia'
})
export class DistanciaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value / 1000) + " km";
  }

}
