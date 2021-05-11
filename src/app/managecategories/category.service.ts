import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  IMA_API_URL : string = 'http://localhost:9999/ima/category/';

  constructor(private httpservice: HttpClient) // Constructor Injection for HttpClient
  {

  }

  // Get All Categories
  getAllCategories(): Observable<any> 
  {
    return this.httpservice.get<any>(this.IMA_API_URL)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }


  // Get All Employees
  getCategoryByName(catName:any): Observable<any> 
  {
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.get<any>(this.IMA_API_URL+"name/"+catName,{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }
  
  
  //Add or Post Category
  addCategory(body:any):Observable<any>{​​​​​​​​
    console.log(body);
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.post<any>(this.IMA_API_URL, JSON.stringify(body),{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }​​​​​​​​


  //  //Add or Post Category
  //  updateCategory(body:any):Observable<any>{​​​​​​​​
  //   console.log(body);
  //   const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
  //   return this.httpservice.put<any>(this.IMA_API_URL, JSON.stringify(body),{​​​​​​​​'headers':headers}​​​​​​​​)
  //   .pipe( retry(1), catchError(this.myerrorhandler));
  // }​​​​​​​​


  //Add or Post Category
  deleteCategory(body:any):Observable<any>{​​​​​​​​
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
