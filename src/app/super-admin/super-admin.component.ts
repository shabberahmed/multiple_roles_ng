import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent {
  constructor(private sharedService:SharedService){}

  logout(){
    this.sharedService.logout()
  }
}
