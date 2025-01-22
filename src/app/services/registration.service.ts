import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:3000/enroll';
  constructor( private _http: HttpClient) { }

  register(userData: any) {
    return this._http.post<any>(this._url, userData);
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return throwError(error);
  // }
}
