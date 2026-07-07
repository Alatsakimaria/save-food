import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

const BOXES: any = {
  bread: {
    title: 'Bread Boxes',
    subtitle: 'Fresh bread boxes from nearby bakeries',
    items: [
      {
        storeId: 1,
        store: 'Kritikos Fournos Bakery',
        image: '/kritikos.png',
        title: 'Bread Box',
        description: 'Fresh bread selection from the end of the day.',
        price: 5,
        oldPrice: 18,
        pickup: '19:00 - 21:30',
        available: '3 left'
      },
      {
        storeId: 3,
        store: 'Veneris Bakery',
        image: '/veneris.png',
        title: 'Bread Box',
        description: 'Daily bread selection for quick evening pickup.',
        price: 4,
        oldPrice: 14,
        pickup: '20:15 - 22:00',
        available: '3 left'
      }
    ]
  },
  pastry: {
    title: 'Pastry Boxes',
    subtitle: 'Croissants, sweets and bakery treats',
    items: [
      {
        storeId: 1,
        store: 'Kritikos Fournos Bakery',
        image: '/kritikos.png',
        title: 'Pastry Box',
        description: 'Mixed pastries, croissants and sweet items.',
        price: 7,
        oldPrice: 22,
        pickup: '19:15 - 21:30',
        available: '2 left'
      }
    ]
  }
};

@Component({
  selector: 'app-box-details',
  imports: [RouterLink, NgFor],
  templateUrl: './box-details.html',
  styleUrl: './box-details.scss'
})
export class BoxDetails {
  page: any;

  constructor(route: ActivatedRoute) {
    const type = route.snapshot.paramMap.get('type') ?? 'bread';
    this.page = BOXES[type] ?? BOXES.bread;
  }
}