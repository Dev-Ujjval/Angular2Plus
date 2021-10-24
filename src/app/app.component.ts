import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'battuta-world';
  countryList = [];
  regionList = [];
  cityList  = [];

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.getCountry();
  }

  getCountry() {
  try {
    this.appService.getCountryList().subscribe(result => {
      this.countryList = result;
    })
  } catch (error) {
   console.log(error) 
  }
  }

  onCountryChange(data) {
    try {
      this.appService.getRegionList(data.code).subscribe(result => {
        this.regionList = result;
      })
    } catch (error) {
     console.log(error) 
    }
  }

  onRegionChange(data) {
    try {
      this.appService.getCityList(data.country, data.region).subscribe(result => {
        this.cityList = result;
        console.log(this.cityList)
      })
    } catch (error) {
     console.log(error) 
    }
  }
}
