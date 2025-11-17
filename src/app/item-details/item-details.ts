import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data';
import { Trip } from '../shared/models/trip.model';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css']
})
export class ItemDetails implements OnInit, OnDestroy {
  trip?: Trip;
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.sub = this.dataService.getTripById(id).subscribe({
      next: (trip) => this.trip = trip,
      error: (err) => {
        console.error(err);
        alert('Не вдалося завантажити подорож');
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}