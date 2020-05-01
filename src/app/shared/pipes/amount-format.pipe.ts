import { Pipe, PipeTransform } from '@angular/core';
import { FormatterService } from '../services/date-time-formate.service';
import { FormaterService } from '../services/formater.service';

@Pipe({
  name: 'amountFormat'
})

export class AmountformatPipe implements PipeTransform {

  constructor(private formatService: FormaterService) {

  }
  transform(value: string, CurrencyCode: 'USD' | 'KHR'): string {
    if (!CurrencyCode || CurrencyCode === 'USD') {
      return this.formatService.toFixed(value, 2).text;
    }
    return this.formatService.toFixed(value, 0).text;
  }

}

