import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenu } from './top-menu/top-menu';
import { AuthMenu } from './auth-menu/auth-menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TopMenu, AuthMenu],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {}
