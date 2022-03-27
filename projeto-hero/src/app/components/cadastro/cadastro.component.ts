import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm : FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   this.cadastroForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      senha: new FormControl("", [Validators.required, Validators.minLength(7),]),
    });
  }

  cadastro(): void{
      this.authService.cadastro(this.cadastroForm.value).subscribe((msg) => {
      console.log(msg);
      this.router.navigate(["login"]);
    });
  }
}
