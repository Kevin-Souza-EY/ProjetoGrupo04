import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();

  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      psw: new FormControl("", [Validators.required, Validators.minLength(7),
      ]),
    });
  }

  login(): void
  {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.psw).subscribe();
  }
}
