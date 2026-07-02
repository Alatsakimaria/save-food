import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

interface StoreBox {
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  pickupWindow: string;
  quantity: string;
}

interface StoreDetailsData {
  name: string;
  address: string;
  telephone: string;
  openingHours: string;
  pickupHours: string;
  rating: number;
  description: string;
  image: string;
  boxes: StoreBox[];
}

const STORE_DATA: Record<string, StoreDetailsData> = {
  '1': {
    name: 'Kritikos Fournos Bakery',
    address: '25 Ethnikis Antistaseos, Heraklion, Crete',
    telephone: '+30 2810 123456',
    openingHours: 'Open daily: 06:30 - 22:00',
    pickupHours: 'Pickup: 19:00 - 21:30',
    rating: 4.8,
    description: 'Fresh bakery goods, pastry boxes and daily surprise bags available for pickup.',
    image: '/kritikos.png',
    boxes: [
      {
        title: 'Bread Box',
        description: 'Fresh bread selection from the end of the day.',
        price: 5,
        originalPrice: 18,
        pickupWindow: '19:00 - 21:30',
        quantity: '3 boxes left'
      },
      {
        title: 'Pastry Box',
        description: 'Mixed pastries, croissants and sweet items.',
        price: 7,
        originalPrice: 22,
        pickupWindow: '19:15 - 21:30',
        quantity: '2 boxes left'
      }
    ]
  },
  '2': {
    name: 'Sweet House Bakery',
    address: '8 1821 Street, Heraklion, Crete',
    telephone: '+30 2810 654321',
    openingHours: 'Open daily: 07:00 - 21:30',
    pickupHours: 'Pickup: 19:30 - 22:00',
    rating: 4.6,
    description: 'Sandwich boxes, sweets and late-day bakery picks with quick pickup.',
    image: '/cup.png',
    boxes: [
      {
        title: 'Sandwich Box',
        description: 'Savory sandwiches prepared fresh during the day.',
        price: 6,
        originalPrice: 19,
        pickupWindow: '19:30 - 22:00',
        quantity: '4 boxes left'
      },
      {
        title: 'Sweet Box',
        description: 'Desserts, pies and small sweet treats.',
        price: 8,
        originalPrice: 24,
        pickupWindow: '19:30 - 21:45',
        quantity: '2 boxes left'
      }
    ]
  },
  '3': {
    name: 'Veneris Bakery',
    address: '14 Knossou Avenue, Heraklion, Crete',
    telephone: '+30 2810 777888',
    openingHours: 'Open daily: 06:00 - 22:30',
    pickupHours: 'Pickup: 20:00 - 22:00',
    rating: 4.7,
    description: 'Classic bakery boxes with bread, mixed snacks and end-of-day offers.',
    image: '/veneris.png',
    boxes: [
      {
        title: 'Mixed Box',
        description: 'A mix of bread, snacks and bakery leftovers.',
        price: 5,
        originalPrice: 17,
        pickupWindow: '20:00 - 22:00',
        quantity: '5 boxes left'
      },
      {
        title: 'Bread Box',
        description: 'Daily bread selection for quick evening pickup.',
        price: 4,
        originalPrice: 14,
        pickupWindow: '20:15 - 22:00',
        quantity: '3 boxes left'
      }
    ]
  }
};

@Component({
  selector: 'app-store-details',
  imports: [RouterLink, NgFor],
  templateUrl: './store-details.html',
  styleUrl: './store-details.scss',
})
export class StoreDetails {
  store: StoreDetailsData;

  constructor(route: ActivatedRoute) {
    const storeId = route.snapshot.paramMap.get('id') ?? '1';
    this.store = STORE_DATA[storeId] ?? STORE_DATA['1'];
  }
}
