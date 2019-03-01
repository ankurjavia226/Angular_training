import { Injectable } from '@angular/core';
import { ApiEndpointURL, AppStorage } from 'src/app/_shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus: Boolean;
  constructor() { }

  get isLoggedIn(){
    if(sessionStorage.getItem(AppStorage.USER_KEY)){
      this.loggedInStatus = true;
    }
    else {
      this.loggedInStatus = false;  
    }
    return this.loggedInStatus;
  }
}
