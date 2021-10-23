import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user.model';
import { ToastrService, Toast } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:8080/api/users';

  constructor(private http: HttpClient, private toasterService: ToastrService) {
    this.toasterService = toasterService;
   }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    console.log('NGPErrorHandler');
    this.toasterService.error('NGPErrorHandler');
    return throwError(error);
  }

}