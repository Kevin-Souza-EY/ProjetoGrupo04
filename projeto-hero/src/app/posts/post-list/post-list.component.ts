import { Component, OnDestroy, OnInit } from "@angular/core";
 // import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Lista } from '/Development/ProjetoGrupo04/projeto-hero/src/app/models/Lista';
import { User } from '/Development/ProjetoGrupo04/projeto-hero/src/app/models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

 //  post = [
 //  { tittle: "First Hero", content: "This is the first hero content" },
 //  { tittle: "Second Hero", content: "This is the second hero content" },
 //  { tittle: "Third Hero", content: "This is the third hero content" },
 //  ];

  posts: Post[] = [];

  heroi = {} as Lista;
  herois: Lista[];

  usuario = {} as User;
  usuarios: User[];
  // private postsSub: Subscription;

 constructor(private postsService: PostsService) {}
   //this.postsSub = new Subscription()}

 ngOnInit() {
   this.getHeroi();
 }

 ngOnDestroy() {}
   //this.posts = this.postsService.getPosts();}

 // -----defini se um heroi será criado ou atualizado------
 saveHeroi(form: NgForm) {
  if (this.heroi.id !== undefined) {
    this.postsService.updateHeroi(this.heroi).subscribe(() => {
      this.cleanFormHeroi(form);
    });
  } else {
    this.postsService.saveHeroi(this.heroi).subscribe(() => {
      this.cleanFormHeroi(form);
    });
  }
}
 // Banco de Herois

 // Chama o serviço para obter todos os herois
 getHeroi() {
  this.postsService.getHeroi().subscribe((herois: Lista[]) => {
    this.herois = herois;
  });
}

// deleta um heroi
deleteHeroi(heroi: Lista) {
  this.postsService.deleteHeroi(heroi).subscribe(() => {
    this.getHeroi();
  });
}

// copia o heroi para ser editado.
editHeroi(heroi: Lista) {
  this.heroi = { ...heroi };
}

// limpa o formulario
cleanFormHeroi(form: NgForm) {
  this.getHeroi();
  form.resetForm();
  this.heroi = {} as Lista;
}

 // --------Banco de Usuarios----------

// defini se um usuario será criado ou atualizado
saveUser(form: NgForm) {
  if (this.usuario.id !== undefined) {
    this.postsService.updateUser(this.usuario).subscribe(() => {
      this.cleanFormUser(form);
    });
  } else {
    this.postsService.saveUser(this.usuario).subscribe(() => {
      this.cleanFormUser(form);
    });
  }
}
 // comando para chamar todos usuarios
 getUser() {
  this.postsService.getUser().subscribe((usuarios: User[]) => {
    this.usuarios = usuarios;
  });
}

// deleta um usuario
deleteUser(usuario: User) {
  this.postsService.deleteUser(usuario).subscribe(() => {
    this.getUser();
  });
}

// copia o usuario para ser editado.
editUser(usuario: User) {
  this.usuario = { ...usuario };
}

// limpa o formulario
cleanFormUser(form: NgForm) {
  this.getUser();
  form.resetForm();
  this.usuario = {} as User;
}
}
