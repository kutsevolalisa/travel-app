import { Component, OnInit } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard, FormsModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})

export class ItemsList implements OnInit {
  trips: Trip[] = [];
  searchText: string = '';
  subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.trips$.subscribe(items => {
      this.trips = items;
    });
    this.dataService.filterTrips('');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearchChange(): void {
    this.dataService.filterTrips(this.searchText);
  }

  onTripSelected(trip: Trip) {
    console.log('Обрана подорож:', trip);
  }
}
