import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private sharedService: SharedService, private router: Router) {}
  loginData = {
    user_name: '',
    password: '',
  };

  login(form: NgForm): void {
    if (form.valid) {
      this.sharedService
        .loginDB(this.loginData.user_name, this.loginData.password)
        .subscribe(
          (data) => {
            const loggedData = JSON.stringify(data);
            const role = data.role;
            localStorage.setItem('user', loggedData);
            localStorage.setItem('role', data.role);
            this.router.navigate(['/otp-verify'])

          },
          (err) => {
            console.log(err);
          }
        );
      console.log('Form is valid', this.loginData);
    } else {
      console.error('Form is invalid');
    }
  }
}
