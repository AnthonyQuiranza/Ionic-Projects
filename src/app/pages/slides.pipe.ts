import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slides'
})
export class SlidesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
