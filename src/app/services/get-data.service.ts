import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpCient: HttpClient) { }

  getData(): Observable<any>{
    return this.httpCient.get<any>('http://localhost:3001/posts');
  }
}
