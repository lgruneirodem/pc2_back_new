import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let trimmedValue = input.value.replace(/\s+/g, ''); // Elimina espacios en blanco
    trimmedValue = trimmedValue.replace(/[^0-9\/]/g, ''); // Elimina caracteres no numéricos ni '/'
    const parts = trimmedValue.split('/');
    
    if (parts.length > 0) {
      // Formatea el día (dd)
      let day = parts[0];
      if (day.length > 2) {
        day = day.substring(0, 2);
      }
      let formattedValue = day;

      // Formatea el mes (mm)
      if (parts.length > 1) {
        let month = parts[1];
        if (month.length > 2) {
          month = month.substring(0, 2);
        }
        formattedValue += '/' + month;
      }

      // Formatea el año (aaaa)
      if (parts.length > 2) {
        let year = parts[2];
        if (year.length > 4) {
          year = year.substring(0, 4);
        }
        formattedValue += '/' + year;
      }

      input.value = formattedValue;
    }
  }
}
