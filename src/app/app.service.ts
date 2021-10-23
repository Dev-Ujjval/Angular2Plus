import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

public headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  AddImages(image: Array<File>): Observable<any> {
    console.log(image);
    const formData = new FormData();
    for (let i = 0; i < image.length; i++) {
      formData.append('uploads[]', image[i], image[i]['name']);
    }
    return this.http.post<any>(`http://localhost:3000/api/upload`, formData);
  }
}
