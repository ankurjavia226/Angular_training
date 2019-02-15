import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateGuard implements CanActivate {
  constructor(private _auth:AuthService ,private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let activeRoute = true;
    if(sessionStorage.getItem('loggedinUser')){
      activeRoute = false;
      this._router.navigate(['/about-us'])        
    }
    // activeRoute = !sessionStorage.getItem('loggedinUser');
    return activeRoute;
    // console.log(sessionStorage.getItem('loggedinUser'));
    // if(sessionStorage.getItem('loggedinUser')){
      // return false;
    // }
    // else{
      // return true;
    // }
  }
}