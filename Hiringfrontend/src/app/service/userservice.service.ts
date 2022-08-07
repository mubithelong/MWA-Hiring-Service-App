import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Interface/User';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  loggedIn: boolean = false;

  userState$ = new BehaviorSubject<{ token: string }>({ token: '' });

  constructor(private http: HttpClient) {}

  signupUser(userData: any) {
    return this.http.post('http://localhost:3100/users/signup', userData);
  }

  login(userData: any) {
    return this.http.post('http://localhost:3100/users/login', userData);
  }

  getUserState(): User | null {
    const decoded =
      this.userState$.value.token &&
      (jwt_decode(this.userState$.value.token) as User);
    return decoded || null;
  }

  isLoggedIn(): boolean {
    const c = localStorage.getItem('Token');
    if (c) this.loggedIn = true;
    else this.loggedIn = false;
    return this.loggedIn;
  }
}
