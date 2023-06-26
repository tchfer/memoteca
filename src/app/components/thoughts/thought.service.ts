import { Thought } from './thought';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  getThoughts(page: number, filter: string): Observable<Thought[]> {
    const itemsPerPage = 6;

    let params = new HttpParams().set("_page", page).set("_limit", itemsPerPage);
    if(filter.trim().length > 2) {
      params = params.set("q", filter);
    }
    // Not a good pratice to concatenate
    // return this.http.get<Thought[]>(`${this.API}?_page=${page}&_limit=${itemsPerPage}`);
    return this.http.get<Thought[]>(this.API, { params }); // { params: params } when var and value have same name, omit
  }

  addThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  editThought(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  searchById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}
