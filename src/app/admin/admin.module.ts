import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashbordComponent } from '../components/admin/dashbord/dashbord.component';
import { AdminEntititesComponent } from '../components/admin/admin-entitites/admin-entitites.component';
import { AdminEntitiesDataComponent } from '../components/admin/admin-entities-data/admin-entities-data.component';

const routes: Routes = [
  {
    path:"",redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashbordComponent },
      {path:'admin-entites',component:AdminEntititesComponent},
      {path:'data',component:AdminEntitiesDataComponent}
    ]
  }
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
