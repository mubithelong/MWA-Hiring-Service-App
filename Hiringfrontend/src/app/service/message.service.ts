import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Jobpost } from '../Interface/EmployeeModel';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _successMsgSource = new Subject<Jobpost>();
  successMsg$ = this._successMsgSource.asObservable();

  constructor() {}

  sendJobpost(message: any) {
    return this._successMsgSource.next(message);
  }
}
