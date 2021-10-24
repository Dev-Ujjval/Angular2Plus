import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public router: Router, private cookieService: CookieService) { }

  ngOnInit() {
  }

  onLogOut() {
    this.router.navigate(['/login']);
    this.cookieService.delete('accesstoken');
  }
}
