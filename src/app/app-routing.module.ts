import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AuthGuard } from './services/auth.guard';
import { PostCardComponent } from './component/post-card/post-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'posts', component: PostCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
