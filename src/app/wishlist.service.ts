// wishlist.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  addToWishlist(username: string, book: any): Observable<any> {
    const wishlistItem = {
      username: username,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A',
      infoLink: book.volumeInfo.infoLink,
      imageLink: book.volumeInfo.imageLinks?.thumbnail || 'N/A'
    };

    return new Observable(observer => {
      axios.post(`${this.apiUrl}/wishlist/add`, wishlistItem)
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
