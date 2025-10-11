import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsList } from '../items-list/items-list';
import { Header } from '../header/header';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  standalone: true,
  imports: [RouterOutlet, ItemsList, Header]
})
export class LayoutComponent {
  title = 'Подорожі';
}

