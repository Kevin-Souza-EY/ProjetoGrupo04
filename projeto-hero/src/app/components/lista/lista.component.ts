import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';

import { ListaService } from "src/app/services/lista.service";
import { AuthService } from "src/app/services/auth.service";

import { Lista } from "src/app/models/Lista";
import { User } from "src/app/models/User";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista$: Observable<Lista[]>;
  id_user : Pick<User, "id_user">;

  constructor(private listaService: ListaService, private authService : AuthService ) { }

  ngOnInit(): void {
    this.lista$ = this.fetchAll();
    this.id_user = this.authService.id_user;

  }

  fetchAll(): Observable<Lista[]>{
    return this.listaService.fetchAll();

  }
createLista(): void{
  this.lista$ = this.fetchAll();
}

delete(id_heroi: Pick<Lista, "id_heroi">): void{
  this.listaService.deletePost(id_heroi).subscribe(() => (this.lista$ = this.fetchAll()));
}
}
