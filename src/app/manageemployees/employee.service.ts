import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  IMA_API_URL : string = 'http://localhost:9999/ima/employee/';

  constructor(private httpservice: HttpClient) // Constructor Injection for HttpClient
  {

  }

  // Get All Employees
  getAllEmployees(): Observable<any> 
  {
    return this.httpservice.get<any>(this.IMA_API_URL)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }

  // Get All Employees
  getEmployeeByName(username:any): Observable<any> 
  {
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.get<any>(this.IMA_API_URL+"name/"+username,{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }
  

  //Add or Post Employee
  deleteEmployee(body:any):Observable<any>{​​​​​​​​
    console.log(body);
    return this.httpservice.delete<any>(this.IMA_API_URL+body)
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
