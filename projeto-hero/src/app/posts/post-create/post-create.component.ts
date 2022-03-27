import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTittle = "";
  enteredContent = "";
  enteredpower = "";
  enteredUniverse = "";

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.postsService.addPost(
      form.value.tittle,
      form.value.power,
      form.value.universe,
      form.value.content
      );
    form.resetForm()
  }
}
