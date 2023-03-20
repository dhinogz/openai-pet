import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Textdavinci003Service {

  constructor(private http: HttpClient) { }
  apiUrl = "https://api.openai.com/v1/completions";

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer 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"
    })
  }

  postCompletion(payload : any): Observable<any> {
    return this.http.post<any>(this.apiUrl, JSON.stringify(payload), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}