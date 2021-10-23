import { Component, OnInit } from '@angular/core';
import { SelectUserService } from './selectuser.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  data: any = [];
  constructor(private userService: SelectUserService) {}
  ngOnInit() {
    this.viewUser();
  }

  viewUser() {
    this.userService.getUser().subscribe(
      data => {
        this.data = data;
        console.log(data);
        // form reset
      },
      error => {
        console.log(error);
      }
    );
  }

  editUser(id) {
    this.userService.editUser(id).subscribe(
      data => {
        console.log(data);
      });
  }
}
