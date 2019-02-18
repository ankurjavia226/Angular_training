import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sessionStorageKey = "loggedinUser";
  private loggedInStatus: Boolean;
  
  constructor() { }
  
  
  get isLoggedIn(){
    if(sessionStorage.getItem(this.sessionStorageKey)){
      this.loggedInStatus = true;
    }
    else {
      this.loggedInStatus = false;
    }
    //return !!sessionStorage.getItem(this.sessionStorageKey);
    return this.loggedInStatus;
  } 

  setLoggedIn(value){
    this.loggedInStatus = value;
  }
}