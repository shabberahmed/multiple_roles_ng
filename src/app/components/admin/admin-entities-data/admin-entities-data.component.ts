import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-entities-data',
  templateUrl: './admin-entities-data.component.html',
  styleUrls: ['./admin-entities-data.component.scss']
})
export class AdminEntitiesDataComponent implements OnInit {
  displayedColumns: string[] = ['username', 'name', 'mobilenumber', 'pickuplocation', 'dropdownlocation', 'chooseadateincalender', 'description','paymentstatus' ,'status'];
  dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const storedData = localStorage.getItem('hospitalFormData');
    if (storedData) {
      this.dataSource = JSON.parse(storedData); // Parse directly into array
    }
  }

  acceptChanges(mobileNumber: string): void {
    const itemIndex = this.dataSource.findIndex(item => item.mobilenumber === mobileNumber);
    if (itemIndex !== -1) {
      this.dataSource[itemIndex].status = 'Accepted';
      localStorage.setItem('hospitalFormData', JSON.stringify(this.dataSource)); // Update local storage
    }
  }

  rejectChanges(mobileNumber: string): void {
    const itemIndex = this.dataSource.findIndex(item => item.mobilenumber === mobileNumber);
    if (itemIndex !== -1) {
      this.dataSource[itemIndex].status = 'Rejected';
      localStorage.setItem('hospitalFormData', JSON.stringify(this.dataSource)); // Update local storage
    }
  }
}
