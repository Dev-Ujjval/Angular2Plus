import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows = [];

  temp = [];

  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor() {
    this.fetch(data => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter((d) => {

      if (d.name.toLowerCase().indexOf(val) !== -1 || !val) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      } else if (d.gender.toLowerCase().indexOf(val) !== -1 || !val) {
        return d.gender.toLowerCase().indexOf(val) !== -1 || !val;
      } else {
        return d.company.toLowerCase().indexOf(val) !== -1 || !val;
      }

    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onActivate(event) {
    if (event.type == 'click') {
      console.log(event.row);
    }
  }

}

