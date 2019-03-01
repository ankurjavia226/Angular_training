import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStorage, ApiEndpointURL } from 'src/app/_shared/constants';
import { HttphelperService } from 'src/app/_shared/services/http-helper/httphelper.service';
import { requestType } from 'src/app/_shared/enum';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private _httpHelper: HttphelperService) { }

  setUser(value){
    sessionStorage.setItem(AppStorage.USER_KEY,value);    
  }

  getUser() {
    return sessionStorage.getItem(AppStorage.USER_KEY);
  }
  
  getUserList() {
    //return this._httpClient.get(`${ApiEndpointURL.USER}?page=2`);
    return this._httpHelper.apiCallWithData(requestType.GET, `${ApiEndpointURL.USER}?page=2`);    
  }

  getSpecifiedUser(id) {
    //return this._httpClient.get(`${ApiEndpointURL.USER}/${id}`);
    return this._httpHelper.apiCallWithData(requestType.GET, `${ApiEndpointURL.USER}/${id}`);
  }
  
  createUser(newUser) {
    //return this._httpClient.post(ApiEndpointURL.USER, newUser);
    return this._httpHelper.apiCallWithData(requestType.POST ,ApiEndpointURL.USER, newUser);
  }

  updateUser(updatedUser) {
    //return this._httpClient.put(ApiEndpointURL.USER, updatedUser);
    return this._httpHelper.apiCallWithData(requestType.PUT, ApiEndpointURL.USER, updatedUser);    
  }
}