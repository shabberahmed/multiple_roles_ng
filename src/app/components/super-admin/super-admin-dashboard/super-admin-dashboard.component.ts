import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.scss'],
})
export class SuperAdminDashboardComponent  implements OnInit{
  ngOnInit(): void {

  }
  constructor(private router: Router) {}
  goToUsers() {
    return this.router.navigate(['super-admin/users-data']);
  }
  goToDoctors() {
    return this.router.navigate(['super-admin/doctors-data']);
  }
  goToHospitals() {
    return this.router.navigate(['super-admin/hospitals-data']);
  }
  goToAdmins() {
    console.log("clicked")
    return this.router.navigate(['super-admin/create-admin']);
  }


}
