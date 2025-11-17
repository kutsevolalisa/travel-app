import { Component } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { CommonModule } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { catchError } from 'rxjs/operators';

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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips() {
    this.trips$ = this.dataService.getItems().pipe(
      catchError(err => {
        console.error(err);
        alert('Не вдалося завантажити список подорожей');
        return [];
      })
    );
  }

  onSearchChange(): void {
    this.trips$ = this.dataService.getItems().pipe(
      map(trips =>
        trips.filter(trip =>
          trip.destination.toLowerCase().includes(this.searchText.toLowerCase())
        )
      ),
      catchError(err => {
        console.error(err);
        alert('Помилка пошуку подорожей');
        return [];
      })
    );
  }
}