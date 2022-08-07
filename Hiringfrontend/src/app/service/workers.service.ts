import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  constructor(private http: HttpClient) {}

  getWorkProfile() {
    return this.http.get<Array<Worker>>('http://localhost:3000/employee/');
  }
}
