import { Injectable } from '@angular/core';
import { Trip } from './shared/models/trip.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  getItems(): Observable<Trip[]> {
    return of(this.trips);
  }
  
  private trips:Trip[] = [
    {
      id: 1,
      destination: 'Париж, Франція',
      startDate: new Date('2025-06-01'),
      endDate: new Date('2025-06-10'),
      price: 1200,
      availableSeats: 5,
      transport: 'Літак',
      accommodation: 'Готель 4*',
      description: 'Романтична подорож у серце Франції, де ви зможете прогулятися вуличками Монмартру, насолодитися краєвидом з Ейфелевої вежі, відвідати Лувр і скуштувати справжні французькі круасани у маленьких кав’ярнях Парижа.',
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
      description: 'Захоплива мандрівка до Токіо — міста, де сучасні технології гармонійно поєднуються з давніми традиціями. Ви відвідаєте величні храми Асакуса, шумні перехрестя Шибуї, скуштуєте суші у місцевих ресторанах та побачите неповторну культуру Японії.',
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
      description: 'Неймовірна подорож до стародавнього Каїра, міста фараонів і пірамід. Ви відвідаєте одне з чудес світу — піраміди Гізи, помилуєтесь величним Сфінксом, здійсните прогулянку по Нілу та відкриєте для себе таємниці єгипетської цивілізації.',
      imageUrl: 'https://images.unsplash.com/photo-1626692880062-35c360fb6afc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isAvailable: false
    }
  ];

  private tripsSubject = new BehaviorSubject<Trip[]>(this.trips);
  trips$ = this.tripsSubject.asObservable();

  filterTrips(searchText: string) {
    const filtered = this.trips.filter(trip =>
      trip.destination.toLowerCase().includes(searchText.toLowerCase())
    );
    this.tripsSubject.next(filtered);
  }

  getTripById(id: number): Trip | undefined {
    return this.trips.find(trip => trip.id === id);
  }

  getNextId(): number {
    if (!this.trips || this.trips.length === 0) return 1;
    return Math.max(...this.trips.map(t => t.id)) + 1;
  }

  addItem(trip: Trip) {
    this.trips.push(trip);
    this.tripsSubject.next(this.trips);
  }
}
