import { Pipe, PipeTransform } from '@angular/core';
import { FormatterService } from '../services/date-time-formate.service';
import { FormaterService } from '../services/formater.service';

@Pipe({
  name: 'discountFormat'
})

export class DiscountformatPipe implements PipeTransform {

  constructor(private formatService: FormaterService) {

  }
  transform(value: string): string {
    return this.formatService.toFixed(value, 2).text + ' %';
  }

}

