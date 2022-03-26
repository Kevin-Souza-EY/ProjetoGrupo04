import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { Lista } from 'src/app/models/Lista';

import { AuthService } from 'src/app/services/auth.service';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create : EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  isOpen = false;

  constructor(private authService: AuthService, private listaService: ListaService) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();

  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(5)]),
      poder: new FormControl("", [Validators.required, Validators.minLength(5)]),
      universo: new FormControl("", [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit(formData: Pick<Lista,"username" | "poder" | "universo">): void
  {
      this.listaService.createPost(formData, this.authService.id_user).pipe(first()).subscribe(() => {
      this.create.emit(null);
    });
    this.form.reset();
    this.formDirective.resetForm();
  }
}
