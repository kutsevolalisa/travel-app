import { Component } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-items-list',
  imports: [CommonModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsList {
  trips:Trip[] = [
    {
      id: 1,
      destination: 'Париж, Франція',
      startDate: new Date('2025-06-01'),
      endDate: new Date('2025-06-10'),
      price: 1200,
      availableSeats: 5,
      transport: 'Літак',
      accommodation: 'Готель 4*',
      description: 'Романтична подорож у серце Франції.',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      isAvailable: true
    },
    {
      id: 2,
      destination: 'Токіо, Японія',
      startDate: new Date('2025-09-15'),
      endDate: new Date('2025-09-25'),
      price: 2000,
      availableSeats: 3,
      transport: 'Літак',
      accommodation: 'Апартаменти',
      description: 'Сучасна культура та стародавні традиції.',
      imageUrl: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isAvailable: true
    },
    {
      id: 3,
      destination: 'Каїр, Єгипет',
      startDate: new Date('2025-12-05'),
      endDate: new Date('2025-12-12'),
      price: 850,
      availableSeats: 0,
      transport: 'Літак',
      accommodation: 'Готель 3*',
      description: 'Відкрий для себе піраміди та Ніл.',
      imageUrl: 'https://images.unsplash.com/photo-1626692880062-35c360fb6afc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isAvailable: false
    }
  ];
}
