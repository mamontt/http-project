import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let result = value.substring(0,30) + "...";
    return result.toUpperCase();;
  }

}
