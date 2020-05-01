import { Pipe, PipeTransform } from '@angular/core';
import { FormatterService } from '../services/date-time-formate.service';
import { FormaterService } from '../services/formater.service';

@Pipe({
  name: 'phoneNumberFormat'
})

export class PhoneNumberformatPipe implements PipeTransform {

  constructor(private formatService: FormaterService) {

  }
  transform(value: string): any {
    return this.formatService.formatePhoneNumber(value).text;
  }

}

