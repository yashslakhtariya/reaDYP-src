import { Component } from '@angular/core';
import { GoogleBooksService } from '../google-books.service';

@Component({
  selector: 'app-glimpse',
  templateUrl: './glimpse.component.html',
  styleUrls: ['./glimpse.component.css']
})

export class GlimpseComponent {

  authorName: string = '';
  authorBooks: any[] = [];

  constructor(private googleBooksService: GoogleBooksService) {}

  onAuthorSearch() {
    if (this.authorName) {
      this.googleBooksService.searchBooksByAuthor(this.authorName)
        .subscribe((data: any) => {
          this.authorBooks = data.items || [];
        });
    }
  }

  authorName: string = '';
  authorBooks: any[] = [];

  constructor(private googleBooksService: GoogleBooksService) {}

  onAuthorSearch() {
    if (this.authorName) {
      this.googleBooksService.searchBooksByAuthor(this.authorName)
        .subscribe((data: any) => {
          this.authorBooks = data.items || [];
        });
    }
  }

  authorName: string = '';
  authorBooks: any[] = [];

  constructor(private googleBooksService: GoogleBooksService) {}

  onAuthorSearch() {
    if (this.authorName) {
      this.googleBooksService.searchBooksByAuthor(this.authorName)
        .subscribe((data: any) => {
          this.authorBooks = data.items || [];
        });
    }
  }

  constructor(private openaiService: OpenaiService) { }

  book:string = '';
  outputtxt: string = '';
  generateText(data:string) {
    this.openaiService.generateText(data).then(text => {
      this.outputtxt = text + '';
    }).catch(error => {
      this.outputtxt = error;
    })
  }
}
