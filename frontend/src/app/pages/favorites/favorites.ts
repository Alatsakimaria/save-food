import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss'
})
export class Favorites {
  favoriteStores: any[] = [];

  ngOnInit() {
    this.favoriteStores = JSON.parse(
      localStorage.getItem('favoriteStores') || '[]'
    );
  }

  removeFavorite(storeId: string) {
    this.favoriteStores = this.favoriteStores.filter(
      store => store.id !== storeId
    );

    localStorage.setItem(
      'favoriteStores',
      JSON.stringify(this.favoriteStores)
    );
  }
}