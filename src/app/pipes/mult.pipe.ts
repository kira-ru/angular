import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mult'
})
export class MultPipe implements PipeTransform{
  transform(value: number, multiplier: number = 1) {
    return value * multiplier
  }
}
