import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  single: any[];

  constructor() {
    Object.assign(this, { single });
  }

  onClick(data) {
    console.log('data');
    console.log(data);
  }

}

