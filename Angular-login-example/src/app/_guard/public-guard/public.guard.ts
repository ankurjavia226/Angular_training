import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../_shared/services';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  sessionStorageKey: string =  'loggedinUser';

  constructor(private _authService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    return !this._authService.isLoggedIn;  
  }
} 
