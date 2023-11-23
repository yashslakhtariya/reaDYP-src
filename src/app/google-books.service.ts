import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyC-TbFN0QC9i2BagVVzbIreoUpJe3EwWZA';

  constructor(private http: HttpClient) { }

  searchBooksBySubject(subject: string) {
    const params = {
      q: `subject:${subject}`,
      maxResults: '5',
      key: this.apiKey 
    };

    return this.http.get(`${this.apiUrl}`, { params });
  }
}