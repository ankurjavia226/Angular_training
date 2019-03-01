import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpointURL } from 'src/app/_shared/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor(private _httpClient: HttpClient) { }

  authenticateUser(cradentials) {
    return this._httpClient.post(ApiEndpointURL.LOGIN_URL, cradentials);
  }
}
