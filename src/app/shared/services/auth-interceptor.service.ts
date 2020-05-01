
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse  } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';
import * as $ from 'jquery';
import { finalize } from 'rxjs/operators';
import { AES_INFO } from './../../shared/constants/common.const';
import { environment } from 'src/environments/environment';
import { Utils } from '../utils/utils.static';
import { AuthService } from './authService.service';
import { ModalService } from './modal.service';
import { Observable} from 'rxjs/Observable';

declare let CryptoJS: any;

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

 constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private router: Router,
    private zone: NgZone,
    private modal: ModalService
  ) {

  }


  decrypt(plaintext, password) {
    return CryptoJS.AES.decrypt({
      ciphertext: CryptoJS.enc.Hex.parse(plaintext.substring(32))
    }, CryptoJS.enc.Hex.parse(CryptoJS.SHA1(password).toString().substring(0, 32)),
    {
      iv: CryptoJS.enc.Hex.parse(plaintext.substring(0, 32)),
    }).toString(CryptoJS.enc.Utf8);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // console.log("Http Intercepter run.");

    // console.log("AuthInterceptor intercept req => " + JSON.stringify(req.url));
    // console.log("AuthInterceptor intercept req => " + JSON.stringify(req.url.includes('/assets')));

    // Ignore path
    if (req.url.indexOf('/assets') === -1 && req.url.indexOf('/security_check') === -1 && req.url.indexOf('/RSA') === -1 && req.url.indexOf('/AES') === -1) {
      // console.log("Communicate Start.");
      // $("div.loading").removeClass("none");
      if (!this.authService.hasSession()) {
        // clonedRequest = req.clone({ headers: req.headers
        //   .append( 'Authorization', 'Bearer ' + this.authService.getAccessToken())
        //   .append( 'X-Requested-With', 'XMLHttpRequest')});
        this.showErrMsg('NOTLOGIN');
        return;
      }

    }

    // let clonedRequest = null;
    // clonedRequest = req.clone({ headers: req.headers});
    // acccess token header append

    // console.log('new headers', clonedRequest.headers.keys());
    return next.handle(req).timeout(30000)
    .pipe(
      finalize(() => {
        // $('div.loading').addClass('none') ;
      })
    )
    .map(event => {
      let apiname = req.url.split(environment.bizServer.context)[1];

      if (!apiname) {
        apiname = req.url;
      }

      if (environment.encryptionUse) {
        const aesInfo: any = Utils.getSecureStorage(AES_INFO.STORE) || {};

        if (event instanceof HttpResponse && event.body.body && typeof event.body.body === 'string') {
          event = event.clone({ body: {
            header: event.body.header,
            body: JSON.parse(this.decrypt(event.body.body, aesInfo.aesKey))
          }});
        }

      }

      if (event instanceof HttpResponse) {
      }
      // "CBK_SES_001"

      return event;
    })
    .catch((error, caught) => {
      // intercept the respons error and displace it to the console
      // console.log('Error Occurred');
      // console.log('Error Occurred => ' + JSON.stringify(error));

      // Access Token
      // ------------------------------------------------------------------

      // ------------------------------------------------------------------
      // $('div.loading').addClass('none');

      if (error instanceof HttpErrorResponse) {
        // if (error.status >= 400 && error.status < 500) {
        //   this.zone.run(() =>  this.router.navigate(['/error403']));
        // } else if (error.status >= 500 && error.status < 500) {
        //   this.zone.run(() =>  this.router.navigate(['/error404']));
        // } else {
        //   this.zone.run(() => this.router.navigate(['/neterror']));
        // }
      //  this.showErrMsg("REQFAIL");
      //  this.zone.run(() => this.router.navigate(['announce/5error']));
        // else if (error.status === 0) {
        //   this.router.navigate(['/index01']);
        // }
      } else {
        this.zone.run(() => this.router.navigate(['announce/5error']));
      }

      return Observable.of(new HttpResponse({body: { header: {result: false}, body: {}} }));
    }) as any;
  }

  showErrMsg(msgKey: string) {

    this.translate.get('COMMON.ERROR').subscribe( message => {

      if (msgKey === 'NOTLOGIN') {

        this.modal.alert({
          content : message[msgKey],
          callback : () => {
            this.zone.run(() =>  this.router.navigate(['/login']));
          }
        });

      } else {

        this.modal.alert({
          content : message[msgKey]
        });

      }


    });
  }
}
