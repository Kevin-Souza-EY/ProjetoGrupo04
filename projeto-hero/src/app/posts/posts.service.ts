import { Injectable } from '@angular/core';
import { catchError, retry, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Lista } from '../models/Lista';
import { User } from '../models/User';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {

  url_herois = 'http://localhost:3000/herois/'
  url_usuarios = 'http://localhost:3000/usuarios/'

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

   // Obtendo todos os herois
  getHerois(): Observable<Lista[]> {
    return this.httpClient.get<Lista[]>(this.url_herois)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }
    // Obtendo herois pelo ID
  getHeroisById(id: number): Observable<Lista> {
    return this.httpClient.get<Lista>(this.url_herois + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salvando um heroi
saveHeroi(heroi: Lista): Observable<Lista> {
  return this.httpClient.post<Lista>(this.url_herois, JSON.stringify(heroi), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

  // atualizando um heroi
  updateHeroi(heroi: Lista): Observable<Lista> {
    return this.httpClient.put<Lista>(this.url_herois + '/' + heroi.id, JSON.stringify(heroi), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deletando um heroi
  deleteHeroi(heroi: Lista) {
    return this.httpClient.delete<Lista>(this.url_herois + '/' + heroi.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Obtendo todos os usuários
  getUsuarios(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url_usuarios)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

// Obtem um usuario pelo id
getUserById(id: number): Observable<User> {
  return this.httpClient.get<User>(this.url_usuarios + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

// salvando um usuario
saveUsuario(usuario: User): Observable<User> {
  return this.httpClient.post<User>(this.url_usuarios, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

// utualiza ndo um usuario
updateUser(usuario: User): Observable<User> {
  return this.httpClient.put<User>(this.url_usuarios + '/' + usuario.id, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

// deletando um usuario
deleteUser(usuario: User) {
  return this.httpClient.delete<User>(this.url_usuarios + '/' + usuario.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(tittle: string, content: string, power: string, universe: string) {
    const post: Post = {tittle: tittle, content: content, power: power, universe: universe};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

// Manipulando erros
handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
};

}

