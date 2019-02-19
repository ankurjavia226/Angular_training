import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateGuard implements CanActivate {
  sessionStorageKey: string =  'loggedinUser';

  constructor(private _authService:AuthService ,private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    if(sessionStorage.getItem(this.sessionStorageKey)){
      this._router.navigate(['/about-us'])        
    }
    return !this._authService.isLoggedIn;
  }
} 
