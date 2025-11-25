import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../auth';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth: Auth, private router: Router) {}

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const value = this.form.value;
    this.auth.register({ email: value.email!, password: value.password! }).subscribe({
      next: () => {
        alert('Registered!');
        this.router.navigate(['/login']);
      },
      error: () => alert('Registration failed.')
    });
  }
}