import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from '../model/posts'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _apiURL: string = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private _httpClient: HttpClient) { }

  createPost(newPost: IPosts): Observable<IPosts[]> {
    return this._httpClient.post<IPosts[]>(this._apiURL, newPost);
  }

  getPost(): Observable<IPosts[]> {
    return this._httpClient.get<IPosts[]>(this._apiURL);
  }
  
  updatePost(updatedPost: IPosts): Observable<IPosts[]>{
    return this._httpClient.put<IPosts[]>(`${this._apiURL}/${updatedPost.id}`, updatedPost);
  }
  
  deletePost(id: number): Observable<IPosts[]> {
    return this._httpClient.delete<IPosts[]>(`${this._apiURL}/${id}`); 
  }
}