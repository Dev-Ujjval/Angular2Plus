import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { url } from '../GloabalConstant';
@Injectable({
  providedIn: 'root'
})
export class SelectUserService {
  constructor(private http: HttpClient) {}
  getUser() {
    return this.http.get(url + '/Register/SelectUser');
  }
  editUser(id) {
    alert(id);
    return this.http.get(url + '/Register/EditUser?id=' + id);
  }
}
