import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isAdding = false;
  data = [
    { fname: 'dean', lname: 'ambrose' },
    { fname: 'seth', lname: 'rollin' },
    { fname: 'halk', lname: 'wogans' }
  ];
  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  submit(firstname, lastname) {
    try {
      if (isNullOrUndefined(firstname.value) || isNullOrUndefined(lastname.value) || firstname.value == '' || lastname.value == '') {
        this.toastr.warning('Please fill all fields', 'Warning!');
      } else {
        const object = { fname: firstname.value, lname: lastname.value };
        this.data.push(object);
        this.toastr.success('Push Successfully....', 'Success!');
      }
    } catch (error) {
      console.log(error);
    }

  }

  remove(i) {
    this.data.splice(i, 1);
  }

  onfChange(value) {
    if (isNullOrUndefined(value)) {
      this.isAdding = false;
    } else {
      this.isAdding = true;
    }
  }

  onlChange(value) {
    if (isNullOrUndefined(value)) {
      this.isAdding = false;
    } else {
      this.isAdding = true;
    }
  }


}

