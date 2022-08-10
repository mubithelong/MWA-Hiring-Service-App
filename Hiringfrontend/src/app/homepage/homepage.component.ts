import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../service/homepage.service';
import { Worker } from '../WorkerInterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../service/message.service';
import { Router } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  workerProfile: Array<Worker> = [];
  cardForm: FormGroup;

  // @Output()
  // touch = new EventEmitter<Worker>();

  constructor(
    private workerService: HomepageService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {
    this.cardForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
    });

    console.log('fetching all profiles');

    this.workerService.getWorkProfile().subscribe((response) => {
      this.workerProfile = response;
      console.log(this.workerProfile);
    });
  }

  hire(worker: any) {
    this.messageService.jobState$.next(worker);
    console.log('printing worker data');
    console.log(worker);
    console.log('printing worker data done');
   // this.messageService.sendJobpost(worker);
    this.router.navigate(['payment']);
  }

  ngOnInit(): void {}
}
