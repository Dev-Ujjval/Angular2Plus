import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { UserService } from './insert/user.service';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    SelectComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
