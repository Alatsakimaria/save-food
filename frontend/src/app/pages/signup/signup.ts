import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  fullName = '';
  username = '';
  email = '';
  password = '';
  role = 'CUSTOMER';

  errorMessage = '';
  isLoading = false;

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  createAccount() {
    this.errorMessage = '';
    this.isLoading = true;

    const user = {
      fullName: this.fullName,
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.auth.signup(user).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Something went wrong in the creation of the account.';
      }
    });
  }
}