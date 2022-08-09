import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker } from '../WorkerInterface';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  constructor(private http: HttpClient) {}

  getWorkProfile(id: String) {
    return this.http.get<Array<Worker>>('http://localhost:3000/employees/');
  }

  saveWorkProfile(workerData: any) {
    return this.http.post(
      'http://localhost:3000/employees/register',
      workerData
    );
  }
}
