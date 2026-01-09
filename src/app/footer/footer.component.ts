import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass/ngStyle

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  // Access the <audio> element from the HTML
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  // State variables
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  progress = 0;
  volume = 1; // 0 to 1

  currentMusic = {
    title: "New Year Dubstep",
    artist: "Rofa Music Store",
    img: "https://via.placeholder.com/56",
    // Added a URL for the audio source
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg"
  };

  ngAfterViewInit() {
    // Set initial volume
    this.audioPlayerRef.nativeElement.volume = this.volume;
  }

  togglePlay() {
    const audio = this.audioPlayerRef.nativeElement;
    
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }

  // Update progress bar and time text as song plays
  onTimeUpdate() {
    const audio = this.audioPlayerRef.nativeElement;
    this.currentTime = audio.currentTime;
    
    // Avoid division by zero
    if (audio.duration) {
      this.progress = (audio.currentTime / audio.duration) * 100;
    }
  }

  // Set duration when metadata loads
  onLoadedMetadata() {
    this.duration = this.audioPlayerRef.nativeElement.duration;
  }

  // Click on progress bar to seek
  seekTo(event: MouseEvent) {
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    
    const percentage = clickX / width;
    const audio = this.audioPlayerRef.nativeElement;
    
    audio.currentTime = percentage * audio.duration;
  }

  // Click on volume bar to change volume
  setVolume(event: MouseEvent) {
    const volumeBar = event.currentTarget as HTMLElement;
    const rect = volumeBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    
    let newVolume = clickX / width;
    // Clamp between 0 and 1
    newVolume = Math.max(0, Math.min(1, newVolume));
    
    this.audioPlayerRef.nativeElement.volume = newVolume;
    this.volume = newVolume;
  }

  // Helper to format seconds into MM:SS
  formatTime(time: number): string {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}