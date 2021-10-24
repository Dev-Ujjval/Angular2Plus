import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesRoutes as routes } from './pages.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountCredentialComponent } from './components/account-credential/account-credential.component';

import { TabsModule, AlertModule } from 'ngx-bootstrap';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AccountCredentialComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TabsModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
})
export class AccountsModule { }
