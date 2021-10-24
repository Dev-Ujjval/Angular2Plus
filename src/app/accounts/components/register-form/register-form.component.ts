import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  showSuccess = false;
  registerForm: FormGroup;
  isRegisterFormSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private accountService: AccountService,
              public router: Router,
              private logger: NGXLogger) { }

  ngOnInit() {
    this.registerFormValidation();
  }

  registerFormValidation() {
    this.registerForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required,
      Validators.email])],
      password: [null, Validators.compose([Validators.required,
      Validators.minLength(4), Validators.maxLength(100)])],
    });
  }

  register() {
    try {
      this.isRegisterFormSubmitted = true;
      if (this.registerForm.invalid) {
        this.logger.warn('Please fill all fields');
        return;
      }
      this.spinner.show();
      this.accountService.userRegister(this.registerForm.value).subscribe(
        result => {
          this.spinner.hide();
          this.isRegisterFormSubmitted = false;
          if (result.id > 0) {
            this.registerForm.reset();
            this.logger.log('Registration Success');
            this.toastr.success('User registered', 'Registration Success');
            this.showSuccess = true;
          } else {
            this.logger.warn('Fail to User register', 'Registration Failed');
            this.toastr.warning('Fail to User register', 'Registration Failed');
          }
        },
        error => {
          this.spinner.hide();
          this.logger.error(error.error.error);
          this.toastr.error(error.error.error, 'Registration Failed');
        }
      );
    } catch (error) {
      this.logger.error(error);
    }

  }
}
