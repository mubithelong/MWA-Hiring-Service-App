import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { Jobpost } from '../Interface/EmployeeModel';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  numberofdays: number = 0;
  jobPostData?: Jobpost;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    const paymentdata = this.messageService.getJobpaymentData();
    const events = this.messageService.getJobpostData();
    console.log('Entering confirmation method component');
    // events.subscribe((event) => console.log(event));

    paymentdata
      .pipe() //this will limit the observable to only one value
      .subscribe((data: any) => {
        this.numberofdays = data;
      });
    console.log(this.numberofdays);

    console.log('Printing confirmation data done');

    events
      .pipe() //this will limit the observable to only one value
      .subscribe((jobPost: Jobpost) => {
        this.jobPostData = jobPost;
      });

    console.log(this.jobPostData?.hourlyRate);
  }
}
