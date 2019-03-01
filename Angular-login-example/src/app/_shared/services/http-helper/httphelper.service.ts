import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttphelperService {

  constructor(private _httpClient: HttpClient) { }

  apiCallWithData(reqType, url, params={}){
    return this._httpClient.request(reqType, url, params);
  }
}
