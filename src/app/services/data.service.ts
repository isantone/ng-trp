import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpServerUrl = 'http://localhost:3003/api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usersUrl =  `${httpServerUrl}/users`;
  userRegUrl =  `${httpServerUrl}/register`;
  placesUrl = '../../assets/db/places.json';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `ERROR ${error.status}: `,
        error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getUsers() {
    return this.http.get(this.usersUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getPlaces() {
    return this.http.get(this.placesUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getUser(userLogin) {
    return this.http.get(`${this.usersUrl}/${userLogin}`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  addUser(user) {
    return this.http.post(this.userRegUrl, user, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}
