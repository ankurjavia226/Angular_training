import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateGuard implements CanActivate {
  sessionStorageKey =  'loggedinUser';
  constructor(private _auth: AuthService , private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let activeRoute = true;
    if (sessionStorage.getItem(this.sessionStorageKey)) {
      activeRoute = false;
      this._router.navigate(['/about-us']);
    }
    return activeRoute;
  }
}
