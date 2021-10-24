import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  isLoginFormSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private accountService: AccountService,
              public router: Router,
              private logger: NGXLogger,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.loginFormValidation();
  }

  loginFormValidation() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required,
      Validators.email])],
      password: [null, Validators.compose([Validators.required,
      Validators.minLength(4), Validators.maxLength(100)])],
    });
  }

  login() {
    try {
      this.isLoginFormSubmitted = true;
      if (this.loginForm.invalid) {
        this.logger.warn('Please fill all fields');
        return;
      }
      this.spinner.show();
      this.accountService.userLogin(this.loginForm.value).subscribe(
        result => {
          this.spinner.hide();
          this.isLoginFormSubmitted = false;
          if (result.token) {
            this.cookieService.set('accesstoken', result.token);
            this.loginForm.reset();
            this.router.navigateByUrl('admin/dashboard');
          } else {
            this.logger.warn('Fail to User login', 'Login Failed');
            this.toastr.warning('Fail to User login', 'Login Failed');
          }
        },
        error => {
          this.spinner.hide();
          this.logger.error(error.error.error);
          this.toastr.error(error.error.error, 'Login Failed');
        }
      );
    } catch (error) {
      this.logger.error(error);
    }

  }

}
