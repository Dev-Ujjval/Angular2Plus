import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as Globals from '../../shared/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getResources(): Observable<any> {
    return this.http.get(`${environment.prefixUrl}/unknown`);
  }

  getUsers(id): Observable<any> {
    return this.http.get(`${environment.prefixUrl}/users?page=` + id);
  }

}
