import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class AppService {

public headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  AddImages(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    console.log(formData);
    return this.http.post<any>(`http://localhost:3000/api/upload`, formData);
  }
}
