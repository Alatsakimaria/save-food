import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'signin', component: Signin },
  { path: 'signup', component: Signup },
  { path: 'home', component: Home }
];