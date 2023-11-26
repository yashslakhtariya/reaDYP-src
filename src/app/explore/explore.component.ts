import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from 'src/app/google-books.service';
import { SharedService } from '../shared.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  subjects: string[] = ['Science', 'Fiction', 'History', 'Technology', 'Romance', 'Spiritual', 'Drama', 'Horror']; // You can add more subjects
  selectedSubject: string = '';
  bookSuggestions: any[] = [];
  results: number = 5;
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

  onSubjectSelected() {
    if (this.selectedSubject) {
      this.googleBooksService.searchBooksBySubject(this.selectedSubject, this.results.toString())
        .subscribe((data: any) => {
          this.bookSuggestions = this.shuffleArray(data.items || []);
        });
    }
    this.sharedService.username$.subscribe((username) => {
      this.username = username;
    });
  }

  //Function to shuffle an array randomly
  private shuffleArray(array: any[]): any[] {
    let currentIndex = array.length, randomIndex, temporaryValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  moreresults() {
    this.results = this.results + 5;
    this.onSubjectSelected();
  }
  reset() {
    this.results = 5;
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
