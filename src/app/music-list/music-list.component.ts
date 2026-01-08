import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styles: []
})
export class MusicListComponent {
  
  tracks = [
    {
      id: 1,
      title: "Midnight Echoes",
      artist: "Neon Horizon",
      description: "A synth-wave journey through the city lights.",
      image: "https://cdn-images.dzcdn.net/images/cover/12850901d97d0e4a6de96c7bacebff99/500x500-000000-80-0-0.jpg" // Replace with your image paths
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "The Voltage",
      description: "High energy rock anthem for the rebellion.",
      image: "https://cdn-images.dzcdn.net/images/cover/12850901d97d0e4a6de96c7bacebff99/500x500-000000-80-0-0.jpg"
    },
    {
      id: 3,
      title: "Silent Storm",
      artist: "Echo Vibe",
      description: "Melodic bass lines meeting soft vocals.",
      image: "https://cdn-images.dzcdn.net/images/cover/12850901d97d0e4a6de96c7bacebff99/500x500-000000-80-0-0.jpg"
    },
    {
      id: 4,
      title: "Cyber Heart",
      artist: "Glitch Protocol",
      description: "Futuristic beats for the modern soul.",
      image: "https://cdn-images.dzcdn.net/images/cover/12850901d97d0e4a6de96c7bacebff99/500x500-000000-80-0-0.jpg"
    },
    {
      id: 5,
      title: "Retro overdrive",
      artist: "Laser Knight",
      description: "Fast-paced retro tracks from the 80s.",
      image: "https://cdn-images.dzcdn.net/images/cover/12850901d97d0e4a6de96c7bacebff99/500x500-000000-80-0-0.jpg"
    },
    {
      id: 6,
      title: "Deep Blue",
      artist: "Oceanic",
      description: "Calm and soothing instrumental vibes.",
      image: "https://cdn-images.dzcdn.net/images/cover/12850901d97d0e4a6de96c7bacebff99/500x500-000000-80-0-0.jpg"
    }
  ];

  playTrack(track: any) {
    console.log('Playing:', track.title);
  }
}