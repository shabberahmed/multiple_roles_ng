import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminDashboardComponent } from '../components/super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminComponent } from './super-admin.component';

const routes:Routes=[
  {
    path:"",redirectTo:'super-admin-dashbord',pathMatch:'full'
  },{
    path:'',
    component:SuperAdminComponent,
    children:[
  {
    path:'super-admin-dashbord',component:SuperAdminDashboardComponent
  }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  bootstrap:[SuperAdminComponent]
})
export class SuperAdminModule { }
