import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../_shared/services';
import { AppStorage } from 'src/app/_shared/constants';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  sessionStorageKey: string =  'loggedinUser';

  constructor(private _authService: AuthService,private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    if(sessionStorage.getItem(AppStorage.USER_KEY)){
      this._router.navigate(['/home']);
    }
    return !this._authService.isLoggedIn;  
  }
} 
