import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import {MatSelectModule} from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Dialog } from '@angular/cdk/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './components/admin/dashbord/dashbord.component';
import { AdminEntititesComponent } from './components/admin/admin-entitites/admin-entitites.component';
import { AdminEntitiesDataComponent } from './components/admin/admin-entities-data/admin-entities-data.component';
import { SuperAdminDashboardComponent } from './components/super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { UsersDataComponent } from './components/super-admin/users-data/users-data.component';
import { HospitalsDataComponent } from './components/super-admin/hospitals-data/hospitals-data.component';
import { DoctersDataComponent } from './components/super-admin/docters-data/docters-data.component';
import { CreateAdminComponent } from './components/super-admin/create-admin/create-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SuperAdminComponent,
    UsersComponent,
    LoginComponent,
    VerifyOtpComponent,
    DashbordComponent,
    AdminEntititesComponent,
    AdminEntitiesDataComponent,
    SuperAdminDashboardComponent,
    UsersDataComponent,
    HospitalsDataComponent,
    DoctersDataComponent,
    CreateAdminComponent
    ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
