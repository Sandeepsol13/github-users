import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://api.github.com/search/users?q=eric';

  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get(this.url);
  }
}
