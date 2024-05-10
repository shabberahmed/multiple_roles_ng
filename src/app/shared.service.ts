import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private router: Router) {}

  usersData = [
    { userName: 'user', password: 'user', role: 'user' },
    { userName: 'admin', password: 'admin', role: 'admin' },
    { userName: 'sadmin', password: 'sadmin', role: 'sadmin' },
  ];

  // Method to simulate user authentication
  loginDB(username: string, password: string): Observable<any> {
    const user = this.usersData.find(
      (u) => u.userName === username && u.password === password
    );
    return of(user);
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
   return this.router.navigate(['/']);
  }
}
