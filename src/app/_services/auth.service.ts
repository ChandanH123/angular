import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://localhost:9999/api/auth/';
const IMA_API = 'http://localhost:9999/ima/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  loggedIn():boolean{
    return sessionStorage.getItem('auth-token')!=null;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  //updateEmployee
  updateProfile(empId:any, mobileNumber: string, location: string): Observable<any> {
    console.log("Inside updateprofile");
    console.log("empId - "+empId+" mobileNumber - "+mobileNumber+" location - "+location);
    return this.http.put(IMA_API + 'employee', {
      empId,
      mobileNumber,
      location
    }, httpOptions);
  }

  //getEmployeeById
  getEmployeeById(empId:any): Observable<any> {
    console.log("Inside getEmployeById");
    console.log("empId - "+empId);
    return this.http.get(IMA_API + 'employee/'+empId, httpOptions);
  }

  //getEmployeeById
  getAllResources(): Observable<any> {
    return this.http.get(IMA_API + 'resource', httpOptions);
  }

  //addOrder
  addOrder(resId: any, catId: any, empId: any): Observable<any> {
    console.log(resId);
    console.log(catId);
    console.log(empId);
    return this.http.post(IMA_API + 'employee/order', {
      employeeOrder: {
        empId 
      },
      orderDate:new Date(),
      orderId:0,
      resources: [
        {
          category:{
            catId
          },
          resId
        }
      ]
    }, httpOptions);
  } 

  //getAllOrdersByEmployeeId
  getAllOrdersByEmployeeId(empId:any): Observable<any> {
    return this.http.get(IMA_API + 'employee/order/empid/'+empId, httpOptions);
  }
}
