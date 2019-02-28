import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsermanagementService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AllowAccessGuard implements CanActivate {

  sessionStorageKey: string =  'loggedinUser';
  constructor(private _usermanagementService: UsermanagementService,
              private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    return !!this._usermanagementService.getUser();  
  }
}