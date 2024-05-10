import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private sharedService: SharedService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Assuming your user object contains a 'role' property
    const data = localStorage.getItem('user');
    const user = data ? JSON.parse(data) : null;
    const otp=localStorage.getItem('otp')
    const checkOpt=otp?JSON.parse(otp):null
    if (user && checkOpt==1234) {
      // Check user role
      if (user.role === 'admin' && state.url.includes('/admin')) {
        return true;
      } else if (user.role === 'user' && state.url.includes('/user')) {
        return true;
      } else if (user.role === 'sadmin' && state.url.includes('/super-admin')) {
        return true;
      } else {
        return this.router.navigate(['/']);
      }
    } else {
      // Redirect to login if user is not logged in
      return this.router.navigate(['/']);
    }
  }
}
