import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ButtonService } from '../Services/button-service.service';
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private userService: UserserviceService //private buttonService: ButtonService
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
    //this.buttonService.showbutton = true;
  }

  login() {
    // console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (data: any) => {
        if (data.success === true) {
          this.userService.userState$.next(data);
          // console.log(this.userService.getUserState());
          this.userService.persistState();
          const fullName = data.userCred.fname + ' ' + data.userCred.lname;
          //localStorage.setItem('Token', data.token);
          localStorage.setItem('Name', fullName);

          localStorage.setItem('Role', data.userCred.role);
          if (data.userCred.role === 'admin') {
            this.route.navigate(['home']);
          } else if (data.userCred.role === 'user') {
            this.route.navigate(['user']);
          } else {
            this.route.navigate(['employee']);
          }
        } else if (data.success === false) {
          alert(data.message);
          this.loginForm.reset();
          this.route.navigate(['login']);
        }
      },
      (error) => {
        console.log(error);
        alert(error);
        this.route.navigate(['login']);
      }
    );
  }
}
