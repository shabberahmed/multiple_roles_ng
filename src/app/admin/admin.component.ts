import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor (private router:Router,private sharedService:SharedService,private location:Location){}
  goToEntites(){
  this.router.navigate(['admin/admin-entites'])
  }
  logout() {
    return this.sharedService.logout();
  }
  goBack(): void {
    this.location.back();
  }
}
