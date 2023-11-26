// readlist.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReadlistService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  getReadlist(username: string): Observable<any> {
    return new Observable(observer => {
      axios.get(`${this.apiUrl}/readlist/${username}`)
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
