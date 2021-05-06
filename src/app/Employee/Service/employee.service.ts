import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from '../employee.entity';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployeeUrl : string = 'http://localhost:9999/ima/employee/';
  postEmployeeUrl: string = 'http://localhost:9999/ima/employee/';
  putEmployeeUrl: string = 'http://localhost:9999/ima/employee/';
  deleteEmployeeUrl: string = 'http://localhost:9999/ima/employee/';

  constructor(private httpservice: HttpClient) // Constructor Injection for HttpClient
  {

  }

  // Get All Employees
  getAllEmployees(): Observable<any> 
  {
    return this.httpservice.get<any>(this.getEmployeeUrl)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }

  
  
  //Add or Post Employee
  addEmployee(body:any):Observable<any>{​​​​​​​​
    console.log(body);
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.post<any>(this.postEmployeeUrl, JSON.stringify(body),{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }​​​​​​​​


   //Add or Post Employee
   updateEmployee(body:any):Observable<any>{​​​​​​​​
    console.log(body);
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.put<any>(this.putEmployeeUrl, JSON.stringify(body),{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }​​​​​​​​


  //Add or Post Employee
  deleteEmployee(body:any):Observable<any>{​​​​​​​​
    console.log(body);
    return this.httpservice.delete<any>(this.deleteEmployeeUrl+body)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }​​​​​​​​





  
  // Error handling
  myerrorhandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
