import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-hospitals-data',
  templateUrl: './hospitals-data.component.html',
  styleUrls: ['./hospitals-data.component.scss']
})
export class HospitalsDataComponent implements OnInit {
  displayedColumns: string[] = ['name', 'location', 'phoneNumber', 'capacity', 'availableBeds'];
  dataSource!: any[];

  constructor(private dialog: MatDialog, private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.loadHospitalsData();
  }

  loadHospitalsData(): void {
    const sadminData = localStorage.getItem('sadminData');
    if (sadminData) {
      const parsedData = JSON.parse(sadminData);
      this.dataSource = parsedData.hospitals;
    } else {
      console.log('No data');
    }
  }

  deleteHospital(name: string): void {
    const sadminData = localStorage.getItem('sadminData');
    if (sadminData) {
      const parsedData = JSON.parse(sadminData);
      parsedData.hospitals = parsedData.hospitals.filter((hospital: any) => hospital.name !== name);
      localStorage.setItem('sadminData', JSON.stringify(parsedData));
      this.loadHospitalsData(); // Refresh the data in the component
    } else {
      console.log('No data found in local storage');
    }
  }

  openAddHospitalDialog(): void {
    const dialogRef = this.dialog.open(DialogAddDocter);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addHospitalToLocalStorage(result);
      }
    });
  }

  addHospitalToLocalStorage(hospitalData: any): void {
    const sadminData = localStorage.getItem('sadminData');
    if (sadminData) {
      const parsedData = JSON.parse(sadminData);
      parsedData.hospitals.push(hospitalData);
      localStorage.setItem('sadminData', JSON.stringify(parsedData));
      this.loadHospitalsData(); // Refresh the data in the component
    } else {
      console.log('No data found in local storage');
    }
  }
}

@Component({
  selector: 'dialog-add-doctor',
  templateUrl: './add-hospital-dialog.component.html',
})
export class DialogAddDocter {}
