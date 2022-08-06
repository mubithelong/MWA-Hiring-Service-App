import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private userservice: UserserviceService
  ) {
    this.signupForm = formBuilder.group({
      fname: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      role: ['admin'],
    });
  }

  signUp(): void {
    console.log(this.signupForm.value);
    this.userservice
      .signupUser(this.signupForm.value)
      .subscribe((data: any) => {
        console.log(data);
        if (data.success === true) {
          this.route.navigate(['login']);
        } else {
          alert('User is already registered');
          this.signupForm.reset();
        }
      });
  }
}
