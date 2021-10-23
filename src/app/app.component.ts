import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;
  error: string;

  constructor(private userService: UserService) {}

  getUsers() {
    this.loading = true;

    this.userService.getUsers().subscribe(
      users => {
        console.log(users);
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }
}
