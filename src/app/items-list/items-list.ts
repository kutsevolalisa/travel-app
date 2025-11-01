import { Component, OnInit } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data';

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

  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.trips = this.dataService.getItems();
  }

  get filteredTrips(): Trip[] {
    return this.trips.filter(trip => trip.destination.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  onTripSelected(trip: Trip) {
    console.log('Обрана подорож:', trip);
  }
}
