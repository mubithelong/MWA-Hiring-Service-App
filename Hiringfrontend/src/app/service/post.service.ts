import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  login(userData: any) {
    return this.http.post('http://localhost:3100/users/login', userData);
  }
}
