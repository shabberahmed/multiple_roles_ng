import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'fullName', 'email', 'role'];
  dataSource!: any[];

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.serviceData().subscribe(data => {
      this.dataSource = data.users; // Assuming the users are in the 'users' array
    });
  }
}
