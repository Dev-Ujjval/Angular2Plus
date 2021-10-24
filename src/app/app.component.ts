import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timeTrack';

  timer;
  compareDate = new Date();

  constructor() {
    //just for this demo today + 7 days
    this.compareDate.setDate(this.compareDate.getDate() + 7); 
    
  }
  ngOnInit() {
    this.timer = setInterval(() => {
      this.timeBetweenDates(this.compareDate);
    }, 1000);
  }

  timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      // Timer done
      clearInterval(this.timer);

    } else {

      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  }

}
