import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

import { Lista } from '../models/Lista';
import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private url = "http://localhost:3306/lista";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  fetchAll(): Observable<Lista[]> {
    return this.http.get<Lista[]>(this.url, { responseType: "json"}).pipe(
      catchError(this.errorHandlerService.handleError<Lista[]>("fetchAll", []))
    );
  }

  createPost(formData: Partial<Lista>, id_user: Pick<User, "id_user">): Observable<Lista>{
    return this.http.post<Lista>(this.url, { username: formData.username, poder: formData.poder, universo: formData.universo, id_user: id_user }, this.httpOptions).pipe(
      catchError(this.errorHandlerService.handleError<Lista>("createPost"))
    );

  }

  deletePost(idherois: Pick<Lista, "id_heroi">): Observable<{}>{
    return this.http.delete<Lista>('${this.ur}/$(id_heroi}', this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Lista>("deletePost"))
    );
  }
}
