import { Component, OnInit } from '@angular/core';
import { MydataserviceService } from './mydataservice.service';
import { Photos, PhotosObj } from './_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MydataserviceService]
})
export class AppComponent implements OnInit {

  title = 'app';
  myPhotosList: Photos[] = [];
  page: number = 1;

  constructor(private service: MydataserviceService) { }

  ngOnInit() {
    // To call api for initial image rendering
    this.getPhotos();
  }

  // To get image data from api
  getPhotos() {
    console.log('page');
    console.log(this.page);
    this.service.getMyPhotos(this.page).subscribe((res) => this.onSuccess(res));
  }

  // When we got data on a success
  onSuccess(res) {
    console.log('res');
    console.log(res);
    if (res != undefined) {
      res.forEach(item => {
        this.myPhotosList.push(new PhotosObj(item));
      });
    }
  }

  // When scroll down the screen
  onScroll()
  {
    console.log("Scrolled");
    this.page = this.page + 1;
    this.getPhotos();
  }

}
