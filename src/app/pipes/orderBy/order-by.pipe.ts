import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    return value.sort(function(a, b){
        if(a[args.curKey] < b[args.curKey]){
            return -1 * args.orderCode;
        }
        else if( a[args.curKey] > b[args.curKey]){
            return 1 * args.orderCode;
        }
        else{
            return 0;
        }
    });
};

}

