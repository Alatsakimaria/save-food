import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-surprise-bags',
  imports: [RouterLink, NgFor],
  templateUrl: './surprise-bags.html',
  styleUrl: './surprise-bags.scss'
})
export class SurpriseBags {
  bags = [
    {
      title: 'Bread Box',
      description: 'Fresh bread selection',
      available: '3 available',
      price: 5
    },
    {
      title: 'Pastry Box',
      description: 'Croissants and sweets',
      available: '2 available',
      price: 7
    },
    {
      title: 'Sandwich Box',
      description: 'Fresh savory sandwiches',
      available: '4 available',
      price: 6
    }
  ];
}