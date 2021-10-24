import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountryList(): Observable<any> {
    return this.http.get(`${environment.prefixUrl}/country/all/?key=` + environment.key);
  }

  getRegionList(country): Observable<any> {
    return this.http.get(`http://battuta.medunes.net/api/region/`+country+`/all/?key=`+ environment.key);
  }

  getCityList(country, region): Observable<any> {
    return this.http.get(`http://battuta.medunes.net/api/city/`+country+`/search/?region=`+ region +`&key=b34f29567bc9ba779dae1a8ffa81476c`);
  }

}
