import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-docters-data',
  templateUrl: './docters-data.component.html',
  styleUrls: ['./docters-data.component.scss'],
})
export class DoctersDataComponent implements OnInit {
  displayedColumns: string[] = ['name', 'specialty', 'hospitalId', 'phoneNumber', 'email'];
  dataSource: any[] = []; // Initialize with an empty array

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadDoctorsData();
  }

  loadDoctorsData(): void {
    const sadminData = localStorage.getItem('sadminData');
    if (sadminData) {
      const parsedData = JSON.parse(sadminData);
      this.dataSource = parsedData.doctors;
    } else {
      console.log('No data');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addDoctorToLocalStorage(result);
      }
    });
  }

  addDoctorToLocalStorage(doctorData: any): void {
    const sadminData = localStorage.getItem('sadminData');
    if (sadminData) {
      const parsedData = JSON.parse(sadminData);
      parsedData.doctors.push(doctorData);
      localStorage.setItem('sadminData', JSON.stringify(parsedData));
      this.loadDoctorsData(); // Refresh the data in the component
    } else {
      console.log('No data found in local storage');
    }
  }

  deleteDoctor(email: string): void {
    const sadminData = localStorage.getItem('sadminData');
    if (sadminData) {
      const parsedData = JSON.parse(sadminData);
      parsedData.doctors = parsedData.doctors.filter((doctor: any) => doctor.email !== email);
      localStorage.setItem('sadminData', JSON.stringify(parsedData));
      this.loadDoctorsData(); // Refresh the data in the component
    } else {
      console.log('No data found in local storage');
    }
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
