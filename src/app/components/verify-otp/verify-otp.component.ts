import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  otpForm!: FormGroup;
  invalidOTP: boolean = false;

  constructor(private formBuilder: FormBuilder,private sharedService:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  checkOTP(): void {
    if (this.otpForm.valid) {
      const enteredOTP = JSON.stringify(this.otpForm.value.otp);
      console.log(enteredOTP);
      if (enteredOTP === "1234") {
        localStorage.setItem('otp', enteredOTP);
        this.invalidOTP = false; 
        const role=localStorage.getItem('role')
        switch (role) {
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          case 'user':
            this.router.navigate(['/user']);
            break;
          case 'sadmin':
            this.router.navigate(['/super-admin']);
            break;
          default:
            this.router.navigate(['/']);
        }
      } else {
        this.invalidOTP = true; // Set the error flag
      }
    }
  }
}
