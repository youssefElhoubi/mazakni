import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MusicListComponent } from '../music-list/music-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,MusicListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
