import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  selectedCategory = 'Bread';

  categories = [
    { name: 'Bread', image: 'bread.jpg' },
    { name: 'Pastries', image: 'pastries.png' },
    { name: 'Sandwiches', image: 'sandwiches.png' },
    { name: 'Sweets', image: 'cakes.svg' }
  ];

  stores = [
    {
      id: 1,
      name: 'Sweet Corner Bakery',
      image: '/kritikos.png',
      categories: ['Bread', 'Pastries', 'Sweets'],
      description: 'Bread · Pastries · Sweets',
      pickup: '19:00 - 22:00',
      distance: '1.2 km',
      price: 5,
      oldPrice: 20,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Morning Dough',
      image: '/cup.png',
      categories: ['Sandwiches', 'Pastries'],
      description: 'Sandwiches · Pastries',
      pickup: '19:30 - 22:00',
      distance: '2 km',
      price: 6,
      oldPrice: 18,
      rating: 4.7
    },
    {
      id: 3,
      name: 'Golden Crust',
      image: '/veneris.png',
      categories: ['Bread'],
      description: 'Bread · Mixed boxes',
      pickup: '19:00 - 21:30',
      distance: '2.1 km',
      price: 5,
      oldPrice: 16,
      rating: 4.4
    }
  ];

  get filteredStores() {
    return this.stores.filter(store =>
      store.categories.includes(this.selectedCategory)
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}