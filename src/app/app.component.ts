import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadedFiles: any[] = [];

  filesToUpload: Array<File> = [];
  constructor(private appService: AppService) {
  }

  onUpload(event) {
      this.filesToUpload = <Array<File>>event.files;
        // this.uploadedFiles.push(file);
        this.appService.AddImages(this.filesToUpload).subscribe(data => {
          if (data.success === true) {
            console.log(data.message, '');
          } else {
            console.log(data.message, '');
          }
        }, error => {
          if (error.status === 0) {
            console.log('Internal Server Error !');
          } else {
            console.log('Something went wrong. Please try again.', '');
          }
        });
}

// WithOut Primeng
  // fileChangeEvent(fileInput: any) {
  //   this.filesToUpload = <Array<File>>fileInput.target.files;
  //   // this.product.photo = fileInput.target.files[0]['name'];
  // }

  // upload() {
  //   this.appService.AddImages(this.filesToUpload).subscribe(data => {
  //     if (data.success === true) {
  //       console.log(data.message, '');
  //     } else {
  //       console.log(data.message, '');
  //     }
  //   }, error => {
  //     if (error.status === 0) {
  //       console.log('Internal Server Error !');
  //     } else {
  //       console.log('Something went wrong. Please try again.', '');
  //     }
  //   });
  // }
  
}
