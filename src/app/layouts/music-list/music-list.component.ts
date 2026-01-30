import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicType } from '../../types/MusicType';
import { MusicServiceService } from '../../core/music-service.service';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styles: []
})
export class MusicListComponent {
  music = signal<MusicType[]>([]);

  constructor(private musicService: MusicServiceService) { }

  ngOnInit(): void {
    this.musicService.getMusicList().subscribe({
      next: (data) => {
        this.music.set(data);
        console.log(data);
      },
      error: (e) => console.log("there is some error", e)
    })
  }

  playTrack(track: any) {
    console.log('Playing:', track.title);
  }
}