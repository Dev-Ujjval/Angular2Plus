import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookieService.get('accesstoken');
    if (isNullOrUndefined(token) || token === '') {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
