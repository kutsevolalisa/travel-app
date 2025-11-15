import { Component } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard, FormsModule, RouterModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList {
  trips$!: Observable<Trip[]>;
  searchText: string = '';

  constructor(private dataService: DataService) {
    this.trips$ = this.dataService.trips$;
  }

  onSearchChange(): void {
    this.dataService.filterTrips(this.searchText);
  }
}
