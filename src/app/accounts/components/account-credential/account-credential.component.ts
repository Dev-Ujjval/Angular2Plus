import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap';
import { isNullOrUndefined } from 'util';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-credential',
  templateUrl: './account-credential.component.html',
  styleUrls: ['./account-credential.component.css']
})
export class AccountCredentialComponent implements OnInit {

  constructor(public router: Router, private location: Location, private cookieService: CookieService) {

  }
  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;

 ngOnInit() {
   const isUserLogin = this.cookieService.get('accesstoken');
   if (isNullOrUndefined(isUserLogin) || isUserLogin === '') {
    if (this.router.url === '/login') {
      this.staticTabs.tabs[0].active = true;
     } else {
      this.staticTabs.tabs[1].active = true;
     }
   } else {
     this.router.navigateByUrl('/admin/dashboard');
   }
  }


  onSelectHome() {
      this.router.navigate(['home']);
  }

  onSelectedTab(data) {
    if (data === 'home') {
      this.router.navigate(['home']);
    } else if (data === 'login') {
      this.location.replaceState('/login');
    } else {
      this.location.replaceState('/register');
    }
  }

}

