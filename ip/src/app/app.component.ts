import { Component, OnInit, ViewChild, ViewContainerRef , TemplateRef} from '@angular/core';
import { observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import '../app/ip.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }

}



