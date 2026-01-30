import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MusicServiceService } from '../../core/music-service.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  constructor(private musicService: MusicServiceService) {}

  musicData = {
    name: '',
    description: ''
  };

  selectedImage= signal<File | null>(null);
  selectedAudio= signal<File | null>(null);
  imagePreview= signal<string | ArrayBuffer | null>(null);

  // Handle Image Selection
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;

      // Create preview
      const reader = new FileReader();
      reader.onload = e => this.imagePreview.set(reader.result as string | ArrayBuffer | null);
      reader.readAsDataURL(file);
    }
  }

  // Handle Audio Selection
  onAudioSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedAudio = file;
    }
  }

  onSubmit() {
    console.log(this.selectedAudio);
    console.log(this.selectedImage);

    
    if (this.musicData.name && this.selectedAudio()) {
      const data = {
        ...this.musicData,
        image: this.selectedImage(),
        audio: this.selectedAudio()
      };
      this.musicService.UploadFile(
        data.name,
        data.description,
        data.image!,
        data.audio!
      ).subscribe({
        next: (response) => {
          console.log('Upload successful:', response);
          alert('Music Uploaded Successfully!');
          // Reset form logic here
        }
      });
    } else {
    }
  }
}
