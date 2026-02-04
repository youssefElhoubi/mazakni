import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicType } from '../types/MusicType';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private apiUrl: string = "http://localhost:8080/api/music";

  // 1. Create the Signal HERE. This is your "State".
  // Initialize with empty array
  musicList = signal<MusicType[]>([]); 
  
  // Optional: Add a flag to know if we already fetched data
  isLoaded = false;

  constructor(private http: HttpClient) { }

  loadMusic() {
    // 2. Check if we already have data to avoid re-fetching
    if (this.isLoaded) return; 

    this.http.get<MusicType[]>(this.apiUrl + "/all").subscribe({
      next: (data) => {
        // 3. Update the Service's signal
        this.musicList.set(data);
        
        this.isLoaded = true; // Mark as loaded
      },
      error: (e) => console.log("Error fetching music", e)
    });
  }
  
  UploadFile(name: string, description: string, imageFile: File, audioFile: File): Observable<any> {
    const formData = new FormData();


    formData.append('name', name);
    formData.append('description', description);
    formData.append('imageFile', imageFile);
    formData.append('audioFile', audioFile);

    return this.http.post(this.apiUrl, formData);
  }
}
