import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() trip!: Trip;

}
