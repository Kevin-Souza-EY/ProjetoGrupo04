import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Lista } from '/Development/ProjetoGrupo04/projeto-hero/src/app/models/Lista';
import { User } from '/Development/ProjetoGrupo04/projeto-hero/src/app/models/User';

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
  herois: Lista[] = [];
  usuarios: User[] = [];
  private postsSub: Subscription;

 constructor(public postsService: PostsService) {
   this.postsSub = new Subscription()
 }

 ngOnInit() {
   this.posts = this.postsService.getPosts();

 getHerois(): {
 this.postsService.getHerois().subscribe((herois: Lista[]) => {
   this.herois = herois;
 });
}

 getUsuarios(): {
  this.postsService.getUsuarios().subscribe((usuarios: User[]) => {
    this.usuarios = usuarios;
  });
}


   this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
 }

 ngOnDestroy(): void {
   this.postsSub.unsubscribe();
 }
}
