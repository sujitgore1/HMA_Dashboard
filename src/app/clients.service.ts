import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  private getData = 'http://hmaapi.kilobytetech.com/users?pageNo=1&size=20'; // Replace with the actual API URL
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVmNGYxMzIxZWNmYzY0MTQ2Yjc5OGYiLCJkYXRlIjoiMjAyMy0wOC0xOVQxNTo0MTo0NC40NDhaIiwiaWF0IjoxNjkyNDU5NzA0fQ.zMqGDeGgQDz6ZPDJLDupGmGiHwEAf0RqtziBt3g7MnA';

  // Define a function to make authorized API requests
  getDataWithToken(): Observable<any> {
    const encodedToken = encodeURIComponent(this.authToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${encodedToken}`
    });

    return this.http.get(`${this.getData}`, { headers});
    
  }

  getClientsData(){
    return this.http.get('https://www.postman.com/collections/b85ab61cf4d0a3c8b643')
  }

  clientLogin(credentials:any){
    return this.http.post('http://hmaapi.kilobytetech.com/auth/login',credentials)
  }
}
