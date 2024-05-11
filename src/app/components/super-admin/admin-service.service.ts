import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor() { }
  liveData={
    hospitals: [
      {
        "id": 1,
        "name": "General Hospital",
        "location": "123 Main Street, City",
        "phoneNumber": "+1234567890",
        "capacity": 200,
        "availableBeds": 150
      },
      {
        "id": 2,
        "name": "City Medical Center",
        "location": "456 Elm Street, Town",
        "phoneNumber": "+1987654321",
        "capacity": 300,
        "availableBeds": 250
      },
      {
        "id": 3,
        "name": "Central Hospital",
        "location": "789 Oak Avenue, Metro",
        "phoneNumber": "+9876543210",
        "capacity": 250,
        "availableBeds": 200
      },
      {
        "id": 4,
        "name": "Sunrise Hospital",
        "location": "101 Pine Street, Suburb",
        "phoneNumber": "+1122334455",
        "capacity": 150,
        "availableBeds": 100
      },
      {
        "id": 5,
        "name": "Community General",
        "location": "321 Cedar Road, County",
        "phoneNumber": "+1555666777",
        "capacity": 400,
        "availableBeds": 300
      }
    ],
    doctors: [
      {
        "id": 1,
        "name": "Dr. John Smith",
        "specialty": "Cardiology",
        "hospitalId": 1,
        "phoneNumber": "+1111111111",
        "email": "john.smith@example.com"
      },
      {
        "id": 2,
        "name": "Dr. Emily Johnson",
        "specialty": "Orthopedics",
        "hospitalId": 2,
        "phoneNumber": "+2222222222",
        "email": "emily.johnson@example.com"
      },
      {
        "id": 3,
        "name": "Dr. Sarah Williams",
        "specialty": "Pediatrics",
        "hospitalId": 1,
        "phoneNumber": "+3333333333",
        "email": "sarah.williams@example.com"
      },
      {
        "id": 4,
        "name": "Dr. Michael Brown",
        "specialty": "Internal Medicine",
        "hospitalId": 3,
        "phoneNumber": "+4444444444",
        "email": "michael.brown@example.com"
      },
      {
        "id": 5,
        "name": "Dr. Lisa Miller",
        "specialty": "Obstetrics and Gynecology",
        "hospitalId": 4,
        "phoneNumber": "+5555555555",
        "email": "lisa.miller@example.com"
      }
    ],

    patient: [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "gender": "Male",
        "dateOfBirth": "1980-05-15",
        "bloodType": "AB+",
        "admissionDate": "2024-05-01",
        "wardNumber": "A101",
        "attendingDoctorId": 1,
        "diagnosis": "Hypertension",
        "status": "Admitted",
        "hospitalName": "Central City Hospital"
      },
      {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith",
        "gender": "Female",
        "dateOfBirth": "1975-10-20",
        "bloodType": "O-",
        "admissionDate": "2024-04-25",
        "wardNumber": "B202",
        "attendingDoctorId": 2,
        "diagnosis": "Fractured leg",
        "status": "Admitted",
        "hospitalName": "Metropolitan Medical Center"
      },
      {
        "id": 3,
        "firstName": "Michael",
        "lastName": "Brown",
        "gender": "Male",
        "dateOfBirth": "1992-12-10",
        "bloodType": "A+",
        "admissionDate": "2024-05-03",
        "wardNumber": "C303",
        "attendingDoctorId": 3,
        "diagnosis": "Influenza",
        "status": "Admitted",
        "hospitalName": "Sunset Community Hospital"
      },
      {
        "id": 4,
        "firstName": "Alice",
        "lastName": "Johnson",
        "gender": "Female",
        "dateOfBirth": "1988-09-05",
        "bloodType": "B+",
        "admissionDate": "2024-05-10",
        "wardNumber": "A102",
        "attendingDoctorId": 2,
        "diagnosis": "Concussion",
        "status": "Admitted",
        "hospitalName": "Green Valley Clinic"
      },
      {
        "id": 5,
        "firstName": "Robert",
        "lastName": "Lee",
        "gender": "Male",
        "dateOfBirth": "1970-07-12",
        "bloodType": "O+",
        "admissionDate": "2024-05-08",
        "wardNumber": "B203",
        "attendingDoctorId": 1,
        "diagnosis": "Appendicitis",
        "status": "Admitted",
        "hospitalName": "Riverside Hospital"
      },
      {
        "id": 6,
        "firstName": "Emily",
        "lastName": "Wong",
        "gender": "Female",
        "dateOfBirth": "1985-03-25",
        "bloodType": "A-",
        "admissionDate": "2024-05-09",
        "wardNumber": "C304",
        "attendingDoctorId": 3,
        "diagnosis": "Pneumonia",
        "status": "Admitted",
        "hospitalName": "Mountainside Medical Center"
      },
      {
        "id": 7,
        "firstName": "David",
        "lastName": "Garcia",
        "gender": "Male",
        "dateOfBirth": "1976-11-18",
        "bloodType": "AB-",
        "admissionDate": "2024-05-07",
        "wardNumber": "A103",
        "attendingDoctorId": 2,
        "diagnosis": "Bronchitis",
        "status": "Admitted",
        "hospitalName": "Harborview Hospital"
      },
      {
        "id": 8,
        "firstName": "Sophia",
        "lastName": "Martinez",
        "gender": "Female",
        "dateOfBirth": "1996-02-28",
        "bloodType": "B-",
        "admissionDate": "2024-05-05",
        "wardNumber": "B204",
        "attendingDoctorId": 1,
        "diagnosis": "Migraine",
        "status": "Admitted",
        "hospitalName": "Pinecrest Medical Center"
      }
    ]

  }
  serviceData():Observable<any>{
    return of(this.liveData)
  }
}
