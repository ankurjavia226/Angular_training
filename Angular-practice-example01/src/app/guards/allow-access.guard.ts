import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllowAccessGuard implements CanActivate {

  sessionStorageKey: string =  'loggedinUser';
  constructor(private _auth: AuthService, private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //return !!this._auth.isLoggedIn; 
    
    return !!sessionStorage.getItem(this.sessionStorageKey);

  }
}
