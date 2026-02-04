import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicType } from '../../types/MusicType';
import { MusicServiceService } from '../../core/music-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styles: []
})
export class MusicListComponent {
  music = this.musicService.musicList;

  constructor(private musicService: MusicServiceService, private routes: Router) { }

  ngOnInit(): void {
    this.musicService.loadMusic();
  }

  playTrack(track: any) {
    this.routes.navigate(['/music/', track.id]);
  }
}