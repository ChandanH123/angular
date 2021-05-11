import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  IMA_API_URL : string = 'http://localhost:9999/ima/resource/';

  constructor(private httpservice: HttpClient) // Constructor Injection for HttpClient
  {

  }

  // Get All Resources
  getAllResources(): Observable<any> 
  {
    return this.httpservice.get<any>(this.IMA_API_URL)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }


  // Get All Resources
  getResourceByCategoryId(catId:number): Observable<any> 
  {
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.get<any>(this.IMA_API_URL+"category/"+catId,{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }
  
  
  //Add or Post Category
  addResource(body:any):Observable<any>{​​​​​​​​
    console.log(body);
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.post<any>(this.IMA_API_URL, JSON.stringify(body),{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }​​​​​​​​


   //Add or Post Category
   updateResource(body:any):Observable<any>{​​​​​​​​
    console.log(body);
    const headers= {​​​​​​​​'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}  // cross-origin​​​​​​​​
    return this.httpservice.put<any>(this.IMA_API_URL, JSON.stringify(body),{​​​​​​​​'headers':headers}​​​​​​​​)
    .pipe( retry(1), catchError(this.myerrorhandler));
  }​​​​​​​​


  //Add or Post Category
  deleteResource(body:any):Observable<any>{​​​​​​​​
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
