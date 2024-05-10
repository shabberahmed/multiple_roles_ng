import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  implements OnInit,OnDestroy{
  constructor(private titleService: Title, private sharedService: SharedService,private location:Location) {}
ngOnInit(): void {
  this.setTitle("welcome user")
}
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  logout() {
    return this.sharedService.logout();
  }
  goBack(): void {
    this.location.back();
}
  ngOnDestroy(): void {
    this.setTitle('')
  }
}
