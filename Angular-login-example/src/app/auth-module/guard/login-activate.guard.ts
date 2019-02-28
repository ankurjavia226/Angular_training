import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsermanagementService } from 'src/app/feature-module/services';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateGuard implements CanActivate {
  sessionStorageKey: string =  'loggedinUser';

  constructor(private _usermanagementService: UsermanagementService ,private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    if(sessionStorage.getItem(this.sessionStorageKey)){
      this._router.navigate(['/about-us'])        
    }
    return !!this._usermanagementService.getUser;
  }
} 
