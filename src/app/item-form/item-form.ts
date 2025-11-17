import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data';
import { Trip } from '../shared/models/trip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemForm {

  form = new FormGroup({
    destination: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    imageUrl: new FormControl('', Validators.required),
    transport: new FormControl('', Validators.required),
    accommodation: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    availableSeats: new FormControl<number | null>(null, [Validators.required, Validators.min(0)])
  });

  constructor(private dataService: DataService, private router: Router) {}

  submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const value = this.form.value;

    const newTrip: Omit<Trip, 'id'> = {
      destination: value.destination!,
      description: value.description!,
      price: Number(value.price!),
      imageUrl: value.imageUrl!,
      transport: value.transport!,
      accommodation: value.accommodation!,
      startDate: new Date(value.startDate!),
      endDate: new Date(value.endDate!),
      availableSeats: Number(value.availableSeats!),
      isAvailable: Number(value.availableSeats!) > 0
    };

    this.dataService.addItem(newTrip).subscribe({
      next: (createdTrip) => {
        alert(`Елемент успішно додано! ID = ${createdTrip.id}`);
        this.form.reset();
        this.router.navigate(['/items']);
      },
      error: (err) => {
        console.error(err);
        alert('Помилка при додаванні елемента. Спробуйте пізніше.');
      }
    });
  }
}