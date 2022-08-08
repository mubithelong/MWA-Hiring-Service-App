import { Component, OnInit, Input } from '@angular/core';
import { JobhistoryService } from '../service/jobhistory.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Job } from '../JobInterface';

@Component({
  selector: 'app-worker-dash',
  templateUrl: './worker-dash.component.html',
  styleUrls: ['./worker-dash.component.css'],
})
export class WorkerDashComponent implements OnInit {
  jobHistory: Array<Job> = [];
  id: String = '';

  constructor(
    private router: Router,
    private jobService: JobhistoryService,
    private route: ActivatedRoute
  ) {
    this.jobService.getJobHistory().subscribe((response) => {
      this.jobHistory = response;
      console.log(this.jobHistory);
    });
  }

  ngOnInit() {}
  editWorkProfile() {
    this.router.navigate(['editprofile']);
  }
}
