import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit {
  displayedColumns: string[] = ['wardNumber', 'firstName', 'lastName', 'diagnosis', 'dateOfBirth', 'bloodType', 'status', 'admissionDate', 'hospitalName'];
  dataSource!: any[];

  constructor() { }

  ngOnInit(): void {
    // Retrieve user (patient) data from local storage
    const sadminData = localStorage.getItem('sadminData');
    if (sadminData) {
      const parsedData = JSON.parse(sadminData);
      this.dataSource = parsedData.patient;
    } else {
      console.log('No data');
    }
  }
}
