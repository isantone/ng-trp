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
  userRegUrl =  `${httpServerUrl}/users/register`;
  userLogUrl =  `${httpServerUrl}/login`;
  placesUrl = `${httpServerUrl}/places/all`;
  recommendationsUrl = `${httpServerUrl}/recommendations`;

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
  }

  getUsers() {
    return this.http.get(this.usersUrl)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getPlaces() {
    return this.http.get(this.placesUrl)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  login(userLogin) {
    return this.http.get(`${this.usersUrl}/${userLogin}`)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  // register(userLogin, userPassword, userName, userAge, sexValue) {
  register(userLogin, userPassword) {
    return this.http.post(this.userRegUrl, {
      login: userLogin,
      password: userPassword,
    })
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  sendLk(userLogin, userLk) {
    return this.http.put(`${this.usersUrl}/${userLogin}`, userLk, httpOptions);
  }

  getRecommendations(userLogin) {
    return this.http.get(`${this.recommendationsUrl}/${userLogin}`);
  }
}
