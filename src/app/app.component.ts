import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config1: any;

  userList = [];
  displayData = [];
  constructor(private swUpdate: SwUpdate, private http: HttpClient) {
  }

  pageChanged(event) {
    this.getUserList(event);
    this.displayData = [];
  }

  ngOnInit() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((evt) => {
                console.log('service worker updated');
            });
            this.swUpdate.checkForUpdate().then(() => {
                // noop
            }).catch((err) => {
                console.error('error when checking for update', err);
            });
        } else {
          const id = 1;
          this.getUserList(id);
        }
  }

  getUserList(id) {

    this.http.get('https://reqres.in/api/users?page=' + id).subscribe(res => {
      // tslint:disable-next-line: no-string-literal

      this.config1 = {
         // tslint:disable-next-line: no-string-literal
        itemsPerPage: res['per_page'],
         // tslint:disable-next-line: no-string-literal
        currentPage: res['page'],
         // tslint:disable-next-line: no-string-literal
        totalItems: res['total']
      };
       // tslint:disable-next-line: no-string-literal
      this.userList = res['data'];
    });
  }

  onRowClick(res) {
    this.displayData = [];
    this.displayData.push(res);
  }

}
