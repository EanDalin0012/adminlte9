import { Injectable } from '@angular/core';
import { DateFormat } from '../common/common.type';
import { DatePipe } from '@angular/common';
import { Utils } from '../utils/utils.static';

export type FormatterMode = 'PHONE_NUM' |'EMAIL';

@Injectable({
    providedIn: 'root'
})
export class FormatterService {
  constructor(
    private datePipe: DatePipe
  ) {}
  private static dateRegExpListInstance: Map<DateFormat, RegExp>;
  private static get dateRegExpList(): Map<DateFormat, RegExp> {
      if (this.dateRegExpListInstance === undefined) {
          this.dateRegExpListInstance = new Map();
          this.dateRegExpListInstance.set('hhmm'          , /^([0-2]{1}\d{1})(\d{2})$/);
          this.dateRegExpListInstance.set('hhmmss'        , /^([0-2]{1}\d{1})(\d{2})(\d{2})$/);
          this.dateRegExpListInstance.set('hhmmssSSS'     , /^([0-2]{1}\d{1})(\d{2})(\d{2})(\d{3})$/);
          this.dateRegExpListInstance.set('yyyymmdd'      , /^([1-2]{1}\d{3})(\d{2})(\d{2})$/);
          this.dateRegExpListInstance.set('yyyy-mm-dd'    , /^([1-2]{1}\d{3})-(\d{2})-(\d{2})$/);
          this.dateRegExpListInstance.set('yyyymmddhhmm'  , /^([1-2]{1}\d{3})(\d{2})(\d{2})(\d{2})(\d{2})$/);
          this.dateRegExpListInstance.set('yyyymmddhhmmss', /^([1-2]{1}\d{3})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
          this.dateRegExpListInstance.set('yyyymmddhhmmssSSS', /^([1-2]{1}\d{3})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{3})$/);
      }
      return this.dateRegExpListInstance;
  }

  formateDate(val: string): string {
    if ( Utils.getSecureStorage( 'langCode' ) === 'en' || Utils.getSecureStorage( 'langCode' ) === 'km' ) {
      const date = String(val.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3'));
      return this.datePipe.transform(date, 'dd/MMM/yyyy');
    }
    return String(val).replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3');
  }

  // private getPatternDate(dateFormat: DateFormat): string {
  //   let replacePattern: string;
  //   switch (dateFormat) {
  //     case 'yyyymmdd'         : replacePattern = '$1$2$3'; break;
  //     case 'dd/MMM/yyyy'       : replacePattern = '$1/$2/$3'; break;
  //     case 'yyyymmddhhmm'     : break;
  //     case 'yyyymmddhhmmss'   : break;
  //     case 'yyyymmddhhmmssSSS': break;
  //     default                 : console.log('Date string not macth with format wrong formate!', dateFormat); return '';
  //   }
  //   return replacePattern;
  // }

}
