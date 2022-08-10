import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../service/message.service';
import { UserserviceService } from '../service/userservice.service';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobpost } from '../Interface/EmployeeModel';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  payForm: FormGroup;
  hide = true;
  jobdata: any;
  jobPostData?: Jobpost;

  @Input() item: any;

  public jobTitle: string = '';
  public hourlyRate: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private userservice: UserserviceService,
    private messageService: MessageService
  ) {
    this.payForm = formBuilder.group({
      startdate: ['', Validators.compose([Validators.required])],
      enddate: ['', Validators.compose([Validators.required])],
      paymentmethod: ['', Validators.compose([Validators.required])],
      cardnumber: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    // this.messageService.successMsg$.subscribe(
    //   (message) => (this.jobdata = message)
    // );
    //const events = this.messageService.getJobpostData();
    // console.log('Entering payment component');
    // events.subscribe((event) => console.log(event));
    // console.log('Printing Job data done');

    const events = this.messageService.getJobpostData();
    console.log('Entering pay method component');
    // events.subscribe((event) => console.log(event));

    events
      .pipe() //this will limit the observable to only one value
      .subscribe((jobPost: Jobpost) => {
        this.jobPostData = jobPost;
      })
      .unsubscribe();
  }

  pay(): void {
    const paymentdata = this.messageService.getJobpaymentData();
    const events = this.messageService.getJobpostData();
    console.log('Entering pay method component');
    // events.subscribe((event) => console.log(event));

    // events
    //   .pipe() //this will limit the observable to only one value
    //   .subscribe((jobPost: Jobpost) => {
    //     this.jobPostData = jobPost;
    //   });
    console.log(this.jobPostData);

    console.log('Printing Job data done');
    console.log('THis is data is jobpostdata');
    console.log(this.jobPostData);
    const jobRecord = {
      //jobTitile: this.jobPostData?.jobname,
      workerEmail: this.jobPostData?.employeeProfile.email,
      hourlyRate: this.jobPostData?.hourlyRate,
      startdate: this.payForm.value.startdate,
      enddate: this.payForm.value.enddate,
      // experiance: this.jobPostData?.exprience,
      paymentmethod: this.payForm.value.paymentmethod,
      cardnumber: this.payForm.value.cardnumber,
      clientInfo: {
        firstName: this.userservice.getUserState()?.fname,
        lastName: this.userservice.getUserState()?.lname,

        email: this.userservice.getUserState()?.email,
        // address: {
        //   city: this.userservice.getUserState()?.address,
        //   // zip: this.jobPostData?.clientInfo.address.zip,
        //   // city: this.jobPostData?.clientInfo.address.city,
        // },
      },
    };
    console.log('Constructed Job Record');
    console.log(jobRecord);
    this.messageService.jobState$.unsubscribe();
    this.userservice.payMoney(jobRecord).subscribe((data: any) => {
      console.log(data);
      // if (data.success === true) {
      this.route.navigate(['confirmation']);
      // } else {
      //   this.payForm.reset();
      // }
    });
    const Difference_In_Time =
      jobRecord.enddate.getTime() - jobRecord.startdate.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    this.messageService.paymentState$.next(Difference_In_Days);
  }

  ngOnDestroy(): void {
    this.messageService.jobState$.unsubscribe();
    // this.messageService.jobState$.complete();
  }
}
