import { Pipe, PipeTransform } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { filterQueryId } from '@angular/core/src/view/util';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  costVal:any;
  transform(value: any, args?: any): any {
    console.log(value, args[0]*1000 , args[1]*1000);
    value.forEach(function (arrayItem) {
     return this.costVal = this.costVal.push(arrayItem.cost);
    })
  }
}