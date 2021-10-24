import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [NGXLogger]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private logger: NGXLogger) {
    this.logger.debug("Debug message");
    this.logger.info("Info message");
    this.logger.log("Default log message");
    this.logger.warn("Warning message");
    this.logger.error("Error message");
  }
}
