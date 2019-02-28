import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpointURL } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticationService {

  constructor(private _httpClient: HttpClient) { }

  authenticateUser(cradentials) {
    return this._httpClient.post(ApiEndpointURL.LOGIN_URL, cradentials);
  }
}