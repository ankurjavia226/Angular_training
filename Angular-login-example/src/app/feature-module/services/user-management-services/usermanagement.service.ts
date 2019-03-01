import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStorage, ApiEndpointURL } from 'src/app/_shared/constants';

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
    return this._httpClient.get(`${ApiEndpointURL.USER}?page=2`);
  }

  getSpecifiedUser(id) {
    return this._httpClient.get(`${ApiEndpointURL.USER}/${id}`);
  }
  
  createUser(newUser) {
    return this._httpClient.post(ApiEndpointURL.USER, newUser);
  }

  updateUser(updatedUser) {
    return this._httpClient.put(ApiEndpointURL.USER, updatedUser);
  }
}