import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message: string;

  constructor(private service: SharedService) { }

  ngOnInit() {
  }

  newMessage() {
    this.service.changeMessage("Hello from Sibling");
  }

}
