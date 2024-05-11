import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {
constructor (private router:Router,private sharedService:SharedService,private location:Location){}
goToEntites(){
this.router.navigate(['admin/admin-entites'])
}
logout() {
  return this.sharedService.logout();
}

checkData(){
  this.router.navigate(['admin/data'])
}

    }
