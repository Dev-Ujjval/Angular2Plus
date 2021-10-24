import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private cookieService: CookieService) { }

  getHeaderAuthorized(contentType = 'application/json'): any {
    const token = this.cookieService.get('accesstoken');
    
    if (token) {
      if (contentType === '' || contentType === null) {
        const httpOptions = {
          headers: new HttpHeaders({
          Authorization: 'Bearer '  + token
          })
        };
        return httpOptions;
      } else {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': contentType,
            Authorization: 'Bearer '  + token
          })
        };
        return httpOptions;
      }
    }
  }
}
