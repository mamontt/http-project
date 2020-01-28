import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rent'
})
export class RentPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let result: string = "";
    if (value[0] == "R") {
      return result = "(for month)" + value.substring(1,value.length);
    }
    return value;
  }

}
