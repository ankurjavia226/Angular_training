import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from '../model/posts'
import { Observable } from 'rxjs';
import { AsyncSpyable } from 'jasmine-auto-spies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _apiURL: string = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private _httpClient: HttpClient) { }

  @AsyncSpyable()
  createPost(newPost: IPosts): Observable<IPosts[]> {
    return this._httpClient.post<IPosts[]>(this._apiURL, newPost);
  }

  @AsyncSpyable()
  getPost(): Observable<IPosts[]> {
    return this._httpClient.get<IPosts[]>(this._apiURL);
  }
  
  @AsyncSpyable()
  updatePost(updatedPost: IPosts): Observable<IPosts[]>{
    return this._httpClient.put<IPosts[]>(`${this._apiURL}/${updatedPost.id}`, updatedPost);
  }

  @AsyncSpyable()  
  deletePost(id: number): Observable<IPosts[]> {
    return this._httpClient.delete<IPosts[]>(`${this._apiURL}/${id}`); 
  }
}