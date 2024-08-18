import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'see'
})
export class SeePipe implements PipeTransform {

  transform(title:string): string {
    return `watch ${title}`;
  }

}
