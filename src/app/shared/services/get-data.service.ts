import { Injectable } from '@angular/core';
import { MainCategory } from '../Class/class-main-category';
import { SubCategory } from '../Class/class-sub-category';
import { ServerService } from './server.service';
import { RequestData } from '../ClassTR/classtr-req-data';
import { MainCategoryList } from '../ClassTR/classtr-main-category-list';
import { SubCategoryList } from '../ClassTR/classtr-sub-category-list';
import { resolve } from 'url';
import { CompanyList } from '../ClassTR/classtr-company-list';
import { Company } from '../Class/class-company';
import { SupplierList } from '../ClassTR/classtr-res-supplier-list';
import { Supplier } from '../Class/class-suplier';


@Injectable({
  providedIn: 'root'
})

export class RequestDataService {

  constructor(
    private serverService: ServerService
    ) {}

    inquiryMainCategory(): Promise<MainCategory[]> {
    return new Promise(resovle => {
      const trReq = new RequestData();
      const api = '/api/main_category/getList';
      this.serverService.HTTPRequest(api, trReq).then(rest => {
        const response = rest as MainCategoryList;
        if ( this.serverService.checkResponse(rest.header) === true) {
          resovle(response.body);
        } else {
          resovle([]);
        }
      });
    });
  }

  inquirySubCategoryList(): Promise<SubCategory[]> {
    return new Promise( (resovle) => {
      const trReq = new RequestData();
      const api = '/api/sub_category/subCategoryList';
      this.serverService.HTTPRequest(api, trReq).then(rest => {
        const response = rest as SubCategoryList;
        if (this.serverService.checkResponse(response.header)) {
          resovle(response.body.list);
        } else {
          resovle([]);
        }
      });
    });
  }

  inquiryCompanyList(): Promise<Company[]> {
    return new Promise((resolve, reject) => {
      const trReq = new RequestData();
      const api = '/api/company_access/getList';
      console.log('trReq data', trReq);
      this.serverService.HTTPRequest(api, trReq).then(resp => {
        console.log(resp);
        const response = resp as CompanyList;
        if (this.serverService.checkResponse(response.header)) {
          resolve(response.body);
        } else {
          reject();
        }
      });
    });
  }

  inquirySupplierList():Promise<Supplier[]> {
    return new Promise((resolve, reject) => {
      const trReq = new RequestData();
      const api = '/res/supplier/getList';
      this.serverService.HTTPRequest(api, trReq).then(res => {
        const response = res as SupplierList;
        if (this.serverService.checkResponse(response.header)) {
          resolve(response.body);
        } else {
          reject();
        }
      });
    });
  }

  inquiryProductList(): Promise<any> {
    return new Promise((resolve, reject) => {

    });
  }

}

