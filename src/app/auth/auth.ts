import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

interface User {
  id: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private users: User[] = [
    { id: '1', email: 'test@example.com', password: '1234' }
  ];

  login(data: { email: string; password: string }): Observable<any> {
    const user = this.users.find(u => u.email === data.email && u.password === data.password);
    if (user) {
      const fakeToken = 'fake-jwt-token-' + user.id;
      return of({ token: fakeToken }).pipe(
        tap(res => localStorage.setItem('token', res.token)),
        delay(500)
      );
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  register(data: { email: string; password: string }): Observable<any> {
    const exists = this.users.some(u => u.email === data.email);
    if (exists) {
      return throwError(() => new Error('User already exists'));
    }
    const newUser: User = { id: (this.users.length + 1).toString(), email: data.email, password: data.password };
    this.users.push(newUser);
    const fakeToken = 'fake-jwt-token-' + newUser.id;
    return of({ token: fakeToken }).pipe(
      tap(res => localStorage.setItem('token', res.token)),
      delay(500)
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}