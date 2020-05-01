import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, CanLoad, CanActivateChild, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/authService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService
) {
  console.log('loading AuthGuard');
 }

 canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.hasSession() ) {
        return false;
      }
      console.log("canActivity start " + state.url);
      // console.log("!this.authService.hasPermission() " + !this.authService.hasPermission(state.url));
      // if (!this.authService.hasPermission(state.url)) {
      //   console.log("you dont have permission. ");
      //   this.showErrMsg("NOACCESS");

      //   return false;
      // }


      return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('Activated Child.');

      return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {

    console.log('canLoad.');

    return true;
  }

}
