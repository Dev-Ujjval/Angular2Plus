import { Component, OnInit } from '@angular/core';
import publicIp from 'public-ip';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  publicIpAddr: string;
  constructor() {}
  ngOnInit() {
    publicIp.v4().then((ip) => console.log(ip));
  }
}
