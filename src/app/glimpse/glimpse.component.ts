import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../google-books.service';
import { WishlistService } from '../wishlist.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-glimpse',
  templateUrl: './glimpse.component.html',
  styleUrls: ['./glimpse.component.css']
})

export class GlimpseComponent implements OnInit {

  authorName: string = '';
  authorBooks: any[] = [];
  username: any;

  constructor(private googleBooksService: GoogleBooksService,
    public sharedService: SharedService,
    private wishlistService: WishlistService,
  ) { }

  ngOnInit() {
    this.sharedService.username$.subscribe((username) => {
      this.username = username;
    });
  }

  onAuthorSearch() {
    if (this.authorName) {
      this.googleBooksService.searchBooksByAuthor(this.authorName)
        .subscribe((data: any) => {
          this.authorBooks = data.items || [];
        });
    }
  }

  addToWishlist(book: any) {
    this.wishlistService.addToWishlist(this.username, book)
      .subscribe({
        next: (response: any) => {
          console.log('Book added to wishlist:', response);
          alert('Book added to wishlist!');
        },
        error: (error: any) => {
          console.error('Error adding book to wishlist:', error);
          alert('Error adding book to wishlist!');
        },
        complete: () => {
          // Handle completion if needed
        }
      });
  }
}

