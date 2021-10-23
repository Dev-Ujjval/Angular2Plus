import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { url } from '../GloabalConstant';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  create_user(name, username, password) {
    const headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlencoded'
    );

    const body = new HttpParams()
      .set('Name', name)
      .set('Username', username)
      .set('Password', password);

    const requestBody = body.toString();
    // tslint:disable-next-line:max-line-length
    return this.http.post(url + '/Register/InsertUser', requestBody, {
      headers
    });
  }
}
