import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MusicListComponent } from '../music-list/music-list.component';
import { MusicServiceService } from './../../core/music-service.service';
import { MusicType } from '../../types/MusicType';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MusicListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  music: MusicType[] = [];

  constructor(private musicService: MusicServiceService) { }

  ngOnInit(): void {
    this.musicService.getMusicList().subscribe({
      next: (data) => {
        this.music = data
        console.log(data);
      },
      error: (e) => console.log("there is some error", e)
    })
  }

}
