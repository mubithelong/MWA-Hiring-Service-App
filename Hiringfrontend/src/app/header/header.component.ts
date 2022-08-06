import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  role: any;
  name: any;

  constructor(
    private router: Router,
    private userService: UserserviceService
  ) {}

  ngOnInit(): void {}

  signUp() {
    this.router.navigate(['signup']);
  }

  login() {
    this.loggedIn();
    this.router.navigate(['login']);
  }

  loggedIn(): boolean {
    this.isLoggedIn = this.userService.isLoggedIn();
    this.role = localStorage.getItem('Role');
    this.name = localStorage.getItem('Name');
    return this.isLoggedIn;
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    localStorage.removeItem('Name');
    this.router.navigate(['login']);
  }

  addNewHouse() {
    this.router.navigate(['add']);
  }
}
