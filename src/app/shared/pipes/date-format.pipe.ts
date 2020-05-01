import { Pipe, PipeTransform } from '@angular/core';
import { FormatterService } from '../services/date-time-formate.service';

@Pipe({
  name: 'dateFormat'
})

export class DateformatPipe implements PipeTransform {

  constructor(private dateFormatService: FormatterService) {

  }
  transform(value: string): any {
    return this.dateFormatService.formateDate(value);
  }

}

