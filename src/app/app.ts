import { Component, signal } from '@angular/core';
import { LayoutComponent } from './layout/layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [LayoutComponent]
})
export class AppComponent {
  protected readonly title = signal('travel-app');
}
