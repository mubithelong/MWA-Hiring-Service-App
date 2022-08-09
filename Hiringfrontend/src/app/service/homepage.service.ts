import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../WorkerInterface';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private http: HttpClient) {}

  getWorkProfile() {
    return this.http.get<Array<Worker>>(
      'http://localhost:3000/employees/get-all'
    );
  }
}
