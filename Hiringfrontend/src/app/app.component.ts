import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from './service/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hiringfrontend';

  constructor(private userService: UserserviceService, private router: Router) {
    this.userService.refreshState();

    const userState = this.userService.getUserState();

    if (userState) {
      console.log('entering');
      this.router.navigate(['/', 'home']);
    } else {
      this.router.navigate(['/', 'login']);
    }
  }
}
