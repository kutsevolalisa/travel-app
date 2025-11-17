import { Injectable } from '@angular/core';
import { Trip } from './shared/models/trip.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000/trips';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getTripById(id: string | number): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addItem(trip: Omit<Trip, 'id'>): Observable<Trip> {
    return this.http.get<Trip[]>(this.baseUrl).pipe(
      map(trips => {
        const maxId = trips.length ? Math.max(...trips.map(t => +t.id)) : 0;
        return { ...trip, id: (maxId + 1).toString() };
      }),
      switchMap(newTrip =>
        this.http.post<Trip>(this.baseUrl, newTrip)
      ),
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Server error:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}