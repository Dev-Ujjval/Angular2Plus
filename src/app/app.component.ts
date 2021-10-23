import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deviceInfo :any= null;
  isMobile: boolean;
  isTablet: boolean;
  isDesktopDevice: boolean;
    constructor(private deviceService: DeviceDetectorService) {
      this.epicFunction();
    }
    epicFunction() {
      
      this.deviceInfo = this.deviceService.getDeviceInfo();
      console.log(this.deviceInfo.browser);
      console.log(this.deviceInfo.browser_version);
      console.log(this.deviceInfo.os);
      console.log(this.deviceInfo.os_version);
      this.isMobile = this.deviceService.isMobile();
      this.isTablet = this.deviceService.isTablet();
      this.isDesktopDevice = this.deviceService.isDesktop();
    }
}
