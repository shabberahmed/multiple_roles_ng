import { Component, OnInit } from '@angular/core';
export interface FormData {
  fullName: string;
  email: string;
  number: number | null;
  password: string;
}


@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formData: FormData = {
    fullName: '',
    email: '',
    number: null,
    password: ''
  };
  localStorageKey = 'formData';

  saveData() {
    const dataString = localStorage.getItem(this.localStorageKey);
    const data: FormData[] = dataString ? JSON.parse(dataString) : [];
    data.push(this.formData);
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
    this.formData = { fullName: '', email: '', number: null, password: '' };
  }

  getData(): FormData[] {
    const dataString = localStorage.getItem(this.localStorageKey);
    return dataString ? JSON.parse(dataString) : [];
  }
}
  
