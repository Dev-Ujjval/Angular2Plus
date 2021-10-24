import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showPicker = false;
  myDate: Date = new Date('01/31/2020 23:59');
  showDate = true;
  showTime = true;
  closeButton: any = { show: false, label: 'Close Me!', cssClass: 'btn btn-sm btn-primary' };
  nowButton: any = { show: false };
  clearButton: any = { show: false }
  
  ngOnInit() {
  }

  onTogglePicker() {
    if (this.showPicker === false) {
      this.showPicker = true;
    }
  }

  onValueChange(val: Date = new Date()) {
    this.myDate = val;
  }

}
