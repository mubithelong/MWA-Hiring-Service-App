import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  signupUser(userData: any) {
    return this.http.post('http://localhost:3000/auth/users/signup', userData);
  }

  login(userData: any) {
    return this.http.post('http://localhost:3000/auth/users/login', userData);
  }

  isLoggedIn(): boolean {
    const c = localStorage.getItem('Token');
    if (c) this.loggedIn = true;
    else this.loggedIn = false;
    return this.loggedIn;
  }
}
