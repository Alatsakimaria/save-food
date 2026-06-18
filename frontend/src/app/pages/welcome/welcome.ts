import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class Welcome {

  constructor(private router: Router) {}

  goToSignIn() {
    this.router.navigate(['/signin']);
  }

}