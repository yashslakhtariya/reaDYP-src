// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
}
