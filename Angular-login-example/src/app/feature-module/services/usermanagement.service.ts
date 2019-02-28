import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStorage, ApiEndpointURL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private _httpClient: HttpClient) { }

  setUser(value){
    sessionStorage.setItem(AppStorage.USER_KEY,value);    
  }

  getUser() {
    return sessionStorage.getItem(AppStorage.USER_KEY);
  }
  
  getUserList() {
    return this._httpClient.get(ApiEndpointURL.GETUSERLIST_URL);
  }

  getSpecifiedUser(id) {
    return this._httpClient.get(ApiEndpointURL.GETSINGLEUSER_URL + id);
  }
  
  createUser(newUser) {
    return this._httpClient.post(ApiEndpointURL.CREATEUSER_URL, newUser);
  }

  updateUser(updatedUser) {
    return this._httpClient.put(ApiEndpointURL.UPDATEUSER_URL, updatedUser);
  }
}