import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes : Routes = [
{ path: "", component: HomeComponent},
{ path: "post-list", component: PostListComponent, canActivate: [AuthGuardService]},
{ path: "login", component: LoginComponent},
{ path: "cadastro", component: CadastroComponent},
{ path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
