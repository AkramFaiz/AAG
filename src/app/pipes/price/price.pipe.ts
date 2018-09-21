import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(value) 
    return value.filter(res => res.cost >= args[0]*1000 && res.cost <= args[1]*1000);
  }
}