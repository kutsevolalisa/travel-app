import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() trip!: Trip;

  @Output() tripSelected = new EventEmitter<Trip>();

  onDetailsClick() {
    this.tripSelected.emit(this.trip);
  }
}
