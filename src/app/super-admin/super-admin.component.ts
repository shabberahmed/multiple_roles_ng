import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Location } from '@angular/common';
import { AdminServiceService } from '../components/super-admin/admin-service.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnDestroy,OnInit {
  constructor(private sharedService:SharedService,private location:Location,private adminService:AdminServiceService){}
ngOnInit(): void {
    localStorage.setItem('sadminData',JSON.stringify(this.adminService.liveData))
}
  logout(){
    this.sharedService.logout()
  }
  goBack(): void {
    this.location.back();
  }
  ngOnDestroy(): void {
this.logout()
  }
}
