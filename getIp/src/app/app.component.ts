import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private results: any;
  private ip: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.ip = require('ip');
    this.results(this.ip);
    console.log(this.results);
  }
}
