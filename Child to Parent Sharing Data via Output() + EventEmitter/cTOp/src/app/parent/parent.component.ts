import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message:string;
  
  constructor() { }

  ngOnInit() {
  }
  

  receiveMessage($event) {
    this.message = $event
  }

}
