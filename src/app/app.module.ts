import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

export const routes: Routes = [
    {
      path: 'demo1',
      component: Demo1Component
    },
    {
      path: 'demo2',
      component: Demo2Component
    },
    {
      path: '',
      component: Demo1Component
    },
  ];

@NgModule({
   declarations: [
      AppComponent,
      Header1Component,
      Header2Component,
      Demo1Component,
      Demo2Component
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
