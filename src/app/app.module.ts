import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { LoggerModule, NgxLoggerLevel, NGXLogger } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpModule, BrowserModule, FormsModule, HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [NGXLogger],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
