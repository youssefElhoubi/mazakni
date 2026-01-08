import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  
  musicData = {
    name: '',
    description: ''
  };

  selectedImage: File | null = null;
  selectedAudio: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  // Handle Image Selection
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      
      // Create preview
      const reader = new FileReader();
      reader.onload = e => this.imagePreview = reader.result;
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
    if (this.musicData.name && this.selectedAudio) {
      console.log('Submitting:', {
        ...this.musicData,
        image: this.selectedImage,
        audio: this.selectedAudio
      });
      alert('Music Uploaded Successfully!');
      // Reset form logic here
    } else {
      alert('Please fill in the required fields.');
    }
  }
}
