// user-login.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  login(credentials: { username: string; password: string }): Observable<any> {
    return new Observable(observer => {
      axios.post(`${this.apiUrl}/login`, credentials)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
