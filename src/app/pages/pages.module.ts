import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutes as routes } from './pages.routes';

import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [ErrorComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ]
})
export class PagesModule { }
