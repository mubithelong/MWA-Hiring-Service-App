import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../JobInterface';

@Injectable({
  providedIn: 'root',
})
export class JobhistoryService {
  constructor(private http: HttpClient) {}

  getJobHistory() {
    return this.http.get<Array<Job>>(
      'http://localhost:3000/job-history/job-record'
    );
  }
}
