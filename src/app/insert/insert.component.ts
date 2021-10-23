import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm, AbstractControl } from '@angular/forms';
import {  UserService } from './user.service';


function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) {
      return;
  }
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('confirm_password');

  if (!pwd.value || !cpwd.value) {
      return;
  }

  if (pwd.value !== cpwd.value) {
    console.log('invalid');
      return { invalid: true };
  }
}
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  signupform: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private userService: UserService) {
  }

  ngOnInit() {
    this.signupform = this.formBuilder.group({
      'name' :  [null, Validators.compose([Validators.required])],
      'username' : [null, [Validators.required]],
      'password': [null, Validators.compose([Validators.required])],
      'confirm_password': [null, Validators.compose([Validators.required, passwordConfirming])]
    });
  }

  signup() {
    const name = this.signupform.controls['name'].value;
    const username = this.signupform.controls['username'].value;
    const password = this.signupform.controls['password'].value;
    console.log(name, username, password);

    this.userService.create_user(name, username, password).subscribe(data => {
      console.log(data);
  // form reset
  }, error => {
    console.log(error);
  });

    this.signupform.reset();
    }

}
