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
    return this.http.get<MusicType[]> (this.apiUrl+"all");
  }

}
