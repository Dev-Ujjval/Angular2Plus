import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// Ngx Modules
import { AccordionModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoggerModule, NgxLoggerLevel, NGXLogger } from 'ngx-logger';
import { AlertModule } from 'ngx-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AccountsModule } from './accounts/accounts.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    SharedModule,
    AccountsModule,
    AdminModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 5000,
      closeButton: true,
      positionClass: 'toast-top-right',
      progressBar: true,
    }),
    NgxSpinnerModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    AlertModule.forRoot(),
    NgxDatatableModule,
    ModalModule.forRoot()
  ],
  providers: [NGXLogger, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
