import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneValue: number | string, country: CountryCode): any {
    try {
      const phoneNumber = parsePhoneNumber(phoneValue + '', country);

      return phoneNumber.formatNational();
    } catch (error) {
      return phoneValue;
    }
  }

}
