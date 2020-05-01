import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class InBox {
  public In_Box(val: string) {
    if ( val !== '' || val) {
      return 'in_box';
    }
    return '';
  }
}

