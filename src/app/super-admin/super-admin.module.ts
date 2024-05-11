import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminDashboardComponent } from '../components/super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminComponent } from './super-admin.component';
import { UsersDataComponent } from '../components/super-admin/users-data/users-data.component';
import {  HospitalsDataComponent } from '../components/super-admin/hospitals-data/hospitals-data.component';
import { DialogContentExampleDialog, DoctersDataComponent } from '../components/super-admin/docters-data/docters-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { CreateAdminComponent } from '../components/super-admin/create-admin/create-admin.component';

const routes:Routes=[
  {
    path:"",redirectTo:'super-admin-dashbord',pathMatch:'full'
  },{
    path:'',
    component:SuperAdminComponent,
    children:[
{
    path:'super-admin-dashbord',component:SuperAdminDashboardComponent
  },
  {
    path:'users-data',component:UsersDataComponent
  },{
    path:'hospitals-data',component:HospitalsDataComponent
  },{
    path:'doctors-data',component:DoctersDataComponent
  },{
    path:'create-admin',component:CreateAdminComponent
  }
    ]
  }
]

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,

  ],
  bootstrap:[SuperAdminComponent]
})
export class SuperAdminModule { }
