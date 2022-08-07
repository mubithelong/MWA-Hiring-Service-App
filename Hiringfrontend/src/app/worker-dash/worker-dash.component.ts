import { Component, OnInit, Input } from '@angular/core';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-worker-dash',
  templateUrl: './worker-dash.component.html',
  styleUrls: ['./worker-dash.component.css'],
})
export class WorkerDashComponent implements OnInit {
  workerProfile: Array<Worker> = [];
  constructor(private workerService: WorkersService) {
    this.workerService.getWorkProfile().subscribe((response) => {
      this.workerProfile = response;
      console.log(this.workerProfile);
    });
  }

  ngOnInit(): void {}
}
