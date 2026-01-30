import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styles: [`
    /* Custom Vinyl Groove Gradient to replace the external image */
    .vinyl-grooves {
      background: 
        repeating-radial-gradient(
          #111 0, 
          #111 2px, 
          #222 3px, 
          #222 4px
        );
    }
  `]
})

export class MusicPlayerComponent {
  constructor(private route: ActivatedRoute) { }

  @Input() coverUrl: string = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/dark.jpg';
  @Input() title: string = 'Time';
  @Input() artist: string = 'Pink Floyd';
  
  // State for Play/Pause button
  isPlaying: boolean = false;

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }
  ngOnInit(): void {
    const id : string|null = this.route.snapshot.paramMap.get("id");
    console.log(id);
  }
}
