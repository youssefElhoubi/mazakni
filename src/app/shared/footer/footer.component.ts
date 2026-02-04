import { Component, ElementRef, ViewChild, AfterViewInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass/ngStyle
import { MusicServiceService } from '../../core/music-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {

  constructor(private musicService: MusicServiceService) { }
  
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  // State variables
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  progress = 0;
  volume = 1;

  // FIX 1: Remove the parentheses (). 
  // Now 'music' is a Signal (a live connection), not a static array.
  music = this.musicService.musicList;

  // FIX 2: Use 'computed' for derived state.
  // This says: "Whenever 'music' changes, automatically grab the first track."
  currentMusic = computed(() => {
    const list = this.music();
    return list.length > 0 ? list[0] : null;
  });

  ngOnInit(): void {
    // This triggers the fetch. 
    // When data arrives, 'music' updates -> 'currentMusic' updates automatically.
    this.musicService.loadMusic();
  }

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