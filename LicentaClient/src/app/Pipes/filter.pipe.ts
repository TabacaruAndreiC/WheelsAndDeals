import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string,carName:string): any[] {
    const resultArray = [];
    if(value.length === 0 || filterString === '' || carName === ''){
      return value;
    }
    for(const item of value){
      if(item[carName]===filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
