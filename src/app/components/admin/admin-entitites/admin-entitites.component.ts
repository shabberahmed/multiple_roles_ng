import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-entitites',
  templateUrl: './admin-entitites.component.html',
  styleUrls: ['./admin-entitites.component.scss']
})
export class AdminEntititesComponent implements OnInit {
  Pickuplocation=['Ramnagar', 'Seethammadara', 'Dwaraka Nagar ','Mvp Colony' ];
  dropdownlocation=['gajuwaka', 'malkapuram', 'Dwaraka Nagar ','Murlinagar' ];

  hospitalForms: any[] = [];

  constructor(private builder:FormBuilder, private sharedService:SharedService, private location:Location,private router:Router) {}

  hospitalform = this.builder.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    mobilenumber: ['', Validators.required],
    pickuplocation: ['', Validators.required],
    dropdownlocation: ['', Validators.required],
    chooseadateincalender: [null, Validators.required],
    description: ['', Validators.required],
    status: "pending",
    paymentstatus:'pending'
  });

  ngOnInit(): void {
    const storedData = localStorage.getItem('hospitalFormData');
    if (storedData) {
      this.hospitalForms = JSON.parse(storedData);
    }
  }

  show(): void {
    const formData = this.hospitalform.value;
    this.hospitalForms.push(formData);
    localStorage.setItem('hospitalFormData', JSON.stringify(this.hospitalForms));
    this.router.navigate(['admin/data']);
  }

  dateChanged($event: { target: { value: any; }; }): void {
    console.log($event.target.value);
  }

  logout(): void {
    this.sharedService.logout();
  }


}
