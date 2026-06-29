import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-best-deals',
  imports: [RouterLink, NgClass, NgFor],
  templateUrl: './best-deals.html',
  styleUrl: './best-deals.scss'
})
export class BestDeals {
  selectedCategory = 'All';

  categories = ['All', 'Bread', 'Pastries', 'Sandwiches', 'Sweets'];

  deals = [
    {
      id: 1,
      store: 'Sweet Corner Bakery',
      box: 'Mixed bakery surprise box',
      category: 'Sweets',
      image: '/kritikos.png',
      pickup: '19:00 - 22:00',
      price: 5,
      oldPrice: 20,
      discount: '75% OFF',
      rating: 4.5
    },
    {
      id: 2,
      store: 'Morning Dough',
      box: 'Pastry Box',
      category: 'Pastries',
      image: '/cup.png',
      pickup: '19:30 - 22:00',
      price: 6,
      oldPrice: 18,
      discount: '65% OFF',
      rating: 4.7
    },
    {
      id: 3,
      store: 'Golden Crust',
      box: 'Bread Box',
      category: 'Bread',
      image: '/veneris.png',
      pickup: '20:00 - 22:00',
      price: 4,
      oldPrice: 15,
      discount: '70% OFF',
      rating: 4.4
    }
  ];

  get filteredDeals() {
    if (this.selectedCategory === 'All') {
      return this.deals;
    }

    return this.deals.filter(deal => deal.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}