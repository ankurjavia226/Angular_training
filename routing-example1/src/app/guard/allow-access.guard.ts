import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllowAccessGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //return this._auth.isLoggedIn;
    
    // if(sessionStorage.getItem('loggedinUser')){
    //   return true;
    // }
    // else{
    //   return false;
    // }
    return !!sessionStorage.getItem('loggedinUser')

  }
}
