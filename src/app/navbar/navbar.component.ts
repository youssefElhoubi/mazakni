import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Menu Items
  menuItems = [
    { label: 'Home', link: '/', active: true },
    { label: 'About', link: '/about', active: false },
  ];  

}
