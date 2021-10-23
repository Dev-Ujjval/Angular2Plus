import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    
    AppComponent,
    ParentComponent,
    ChildComponent
   
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  exports: [ ChildComponent ],
  providers: [],
  bootstrap: [AppComponent],
 
  entryComponents: [
    ChildComponent
]
})
export class AppModule { }
