import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3306/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  id: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router) { }

  cadastro(username: Omit<User, "id">): Observable<User> {
    return this.http.post<User>('${this.url}/cadastro', username, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("cadastro"))
    );
  }

  login(email: Pick<User, "email">, psw: Pick<User, "psw">) : Observable<{
    token: string; id: Pick<User, "id">
  }> {
    return this.http.post('${this.url}/login', { email, psw }, this.httpOptions).pipe(
      first(),
      tap((tokenObject: { token: string; id: Pick<User, "id">}) => {
        this.id = tokenObject.id;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["lista"]);

      }),
      catchError(this.errorHandlerService.handleError<{token: string; id: Pick<User, "id">}>("login"))
    );
  }
}


