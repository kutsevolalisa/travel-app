import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-auth-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-menu.html',
  styleUrls: ['./auth-menu.css']
})
export class AuthMenu {}
