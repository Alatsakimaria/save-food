import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-signin',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class Signin {
  username = '';
  password = '';

  errorMessage = '';
  isLoading = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  login() {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter your username and password.';
      return;
    }

    this.isLoading = true;

    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log('LOGIN ERROR:', error);

        this.isLoading = false;

        if (error.status === 404) {
          this.errorMessage = 'There is no user with this username.';
        } else if (error.status === 401) {
          this.errorMessage = 'Wrong password.';
        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }

        this.cdr.detectChanges();
      }
    });
  }
}