import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../service/homepage.service';
import { Worker } from '../WorkerInterface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  workerProfile: Array<Worker> = [];
  constructor(private workerService: HomepageService) {
    console.log('fetching all profiles');

    this.workerService.getWorkProfile().subscribe((response) => {
      this.workerProfile = response;
      console.log(this.workerProfile);
    });
  }
  ngOnInit(): void {}
}
