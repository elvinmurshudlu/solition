import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any) {
    const inputDate = new Date(value);

    const day = inputDate.getUTCDate();
    const month = inputDate.getUTCMonth() + 1; // Adding 1 to the month since it's zero-based
    const year = inputDate.getUTCFullYear();

    return `${day}/${month}/${year}`;

  }

}
