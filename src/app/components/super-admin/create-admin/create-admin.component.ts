import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent {

  productForm: FormGroup;
  admins: any[] = [];

  constructor(private fb:FormBuilder) {
    this.productForm = this.fb.group({
      users: this.fb.array([]) ,
    });
    this.loadAdminsFromLocalStorage();
  }

  users() : FormArray {
    return this.productForm.get("users") as FormArray
  }

  newUser(): FormGroup{
    return this.fb.group({
      name: '',
      mobilenumber: '',
      usertypepassword: '',
    })
  }

  addUser() {
    this.users().push(this.newUser());
  }

  removeUser(i:number) {
    this.users().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.admins.push(this.productForm.value);
    const parsedData = JSON.stringify({ users: this.admins });
    localStorage.setItem('addedAdmins',parsedData);
  }

  loadAdminsFromLocalStorage() {
    const DBdata = localStorage.getItem('addedAdmins');
    const realData = DBdata ? JSON.parse(DBdata) : { users: [] };
    this.admins = realData.users;
  }
}
