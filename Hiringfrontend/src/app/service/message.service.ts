import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Jobpost } from '../Interface/EmployeeModel';
import { ReplaySubject } from 'rxjs';
import { Job } from '../JobInterface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  _successMsgSource = new Subject<Jobpost>();
  successMsg$ = this._successMsgSource.asObservable();

  jobState$ = new ReplaySubject<Jobpost>();
  paymentState$ = new ReplaySubject<number>();

  constructor() {}

  sendJobpost(message: any) {
    return this._successMsgSource.next(message);
  }

  getJobpostData() {
    this.successMsg$.subscribe(this._successMsgSource);
    return this.jobState$.asObservable();
  }

  getJobpaymentData() {
    //this.successMsg$.subscribe(this._successMsgSource);
    return this.paymentState$.asObservable();
  }
}
