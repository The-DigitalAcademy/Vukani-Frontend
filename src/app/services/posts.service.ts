import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interface/posts';

const url = 'http://localhost:8080/api/posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Array<Posts>> {
    return this.httpClient.get<Array<Posts>>(
      `${url}`
    )
  }

  getPost(id: string): Observable<Posts> {
    return this.httpClient.get<Posts>(`${url}/${id}`);
  }
}
