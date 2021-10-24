import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {GlobalService} from '../../shared/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  userRegister(body: any): Observable<any> {
    return this.http.post(`${environment.prefixUrl}/register`, body, this.globalService.getHeaderAuthorized());
  }

  userLogin(body: any): Observable<any> {
    return this.http.post(`${environment.prefixUrl}/login`, body, this.globalService.getHeaderAuthorized());
  }
}
