import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { JobhistoryService } from '../service/jobhistory.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Job } from '../JobInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-worker-dash',
  templateUrl: './worker-dash.component.html',
  styleUrls: ['./worker-dash.component.css'],
})
export class WorkerDashComponent implements OnInit {
  // jobHistory: Array<Job> = [];
  displayedColumns: string[] = ['name', 'address', 'days', 'amount'];

  jobHistory: any = [];
  dataSource = new MatTableDataSource<any>(this.jobHistory);

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  constructor(
    private router: Router,
    private jobService: JobhistoryService,
    private route: ActivatedRoute
  ) {
    // this.jobService.getJobHistory().subscribe((response) => {
    //   this.jobHistory = response;
    //   console.log(this.jobHistory);
    // });
    this.jobService.getJobHistory().subscribe((response) => {
      response.forEach((d) => {
        let jh = {
          name: d.clientInfo.firstName,
          address: d.clientInfo.address.city,
          days: new Date(d.endDate).getDate() - new Date(d.startDate).getDate(),
          // days: d.startDate,

          // amount:
          //   (d.startDate.valueOf() - d.endDate.valueOf()) *
          //   d.hourlyRate.valueOf(),
          amount:
            (new Date(d.endDate).getDate() - new Date(d.startDate).getDate()) *
            d.hourlyRate.valueOf(),
        };
        this.jobHistory.push(jh);
      });
      this.dataSource = new MatTableDataSource<any>(this.jobHistory);
    });
  }
  ngOnInit(): void {}

  editWorkProfile() {
    this.router.navigate(['editprofile']);
  }
}
