import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../service/message.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  payForm: FormGroup;
  hide = true;
  jobdata: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private userservice: UserserviceService,
    private messageService: MessageService
  ) {
    this.payForm = formBuilder.group({
      paymentmethod: ['', Validators.compose([Validators.required])],
      cardnumber: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
    this.messageService.successMsg$.subscribe(
      (message) => (this.jobdata = message)
    );
    console.log(this.jobdata);
  }

  pay(): void {
    console.log(this.payForm.value);
    this.userservice.payMoney(this.payForm.value).subscribe((data: any) => {
      console.log(data);
      if (data.success === true) {
        this.route.navigate(['confirmation']);
      } else {
        this.payForm.reset();
      }
    });
  }
}
