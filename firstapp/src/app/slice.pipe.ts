import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    return value.slice(args[0],args[2])
  }

}
