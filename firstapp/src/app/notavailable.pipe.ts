import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notavailable'
})
export class NotavailablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value ==""){
      return "NA"
    }
    else{
      return value
    }
  }

}
