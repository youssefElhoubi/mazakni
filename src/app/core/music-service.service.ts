import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicType } from '../types/MusicType';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private apiUrl: string = "http://localhost:8080/api/music/";

  constructor(private http: HttpClient) { }

  getMusicList(): Observable<MusicType[]> {
    return this.http.get<MusicType[]>(this.apiUrl + "all");
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
