import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Interface/User';
import { UserserviceService } from '../service/userservice.service';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-create-worker-profile',
  templateUrl: './create-worker-profile.component.html',
  styleUrls: ['./create-worker-profile.component.css'],
})
export class CreateWorkerProfileComponent implements OnInit {
  workerProfileForm!: FormGroup;
  user!: any | null;

  constructor(
    private fb: FormBuilder,
    private userService: UserserviceService,
    private http: HttpClient,
    private route: Router,
    private workerService: WorkersService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserState();
    console.log(this.user);
    this.createForm();
  }

  createForm(): void {
    this.workerProfileForm = this.fb.group({
      firstName: [this.user.fname, Validators.required],
      lastName: [this.user.lname, Validators.required],
      email: [this.user.email, Validators.required],
      jobTitle: ['', Validators.required],
      hourlyRate: ['', Validators.required],
      experience: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit(data: any) {
    try {
      let hourlyRate: number = +data.hourlyRate;
      let experience: number = +data.experience;

      const workerData = {
        jobTitile: data.jobTitile,
        employeeProfile: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          address: {
            street: data.street,
            zip: data.zip,
            city: data.city,
          },
        },
        hourlyRate: hourlyRate,
        experience: experience,
      };

      console.log('registering worker');
      console.log(workerData);

      this.workerService.saveWorkProfile(workerData).subscribe((data: any) => {
        this.route.navigate(['employee']);
      });

      // this.http.post('http://localhost:3000/employees/register', workerData);
      // console.log('register method is called');
      // this.route.navigate(['employee']);
    } catch (error) {}
  }
}
