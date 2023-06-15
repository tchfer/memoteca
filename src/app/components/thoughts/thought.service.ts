import { Thought } from './thought';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }
}
