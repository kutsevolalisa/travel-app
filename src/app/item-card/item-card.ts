import { Component, Input } from '@angular/core';
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
}
