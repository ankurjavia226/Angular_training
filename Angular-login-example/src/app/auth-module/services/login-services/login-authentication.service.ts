import { Injectable } from '@angular/core';
import { ApiEndpointURL } from 'src/app/_shared/constants';
import { HttphelperService } from 'src/app/_shared/services/http-helper/httphelper.service';
import { requestType } from 'src/app/_shared/enum';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor(private _httpHelper: HttphelperService) { }

  authenticateUser(cradentials) {
    //return this._httpClient.get(ApiEndpointURL.LOGIN_URL, cradentials);
    return this._httpHelper.apiCallWithData(requestType.GET, ApiEndpointURL.LOGIN_URL, cradentials);
  }
}