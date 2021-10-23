import { Component } from '@angular/core';
import { AppService } from './app.service';

declare var  $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: File = null;
  constructor(private appService: AppService) {
  }

  handleFileAddressProof(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
      };
      reader.readAsDataURL(event.target.files[0]);

      const filename = event.target.files.item(0).name;
      const ext = filename.substr(filename.lastIndexOf('.') + 1);
      if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
        this.image = event.target.files.item(0);
      } else {
        $('#image').val('');
        console.log('Upload only .jpg .jpeg or .png image');
      }
    }
  }

  upload() {
    this.appService.AddImages(this.image).subscribe(data => {
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

}
