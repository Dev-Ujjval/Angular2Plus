import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;


  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: [null],
      username: [null, [Validators.required]],
      institution: [null],
      company: [null, [Validators.required]],
      salary: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    const email = this.form.get('email');
    console.log('email');
    console.log(email);
    email.setValidators([Validators.required]);
    email.updateValueAndValidity();

    if (this.form.valid) {
      console.log(this.form.value); // Process your form
    }
  }

}

