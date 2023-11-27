import { Component } from '@angular/core';
import { ReadlistService } from '../readlist.service';
import { SharedService } from '../shared.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-readlist',
  templateUrl: './readlist.component.html',
  styleUrls: ['./readlist.component.css']
})
export class ReadlistComponent {
  readlistbooks: any[] = [];
  user: any;
  constructor(
    private readlistService: ReadlistService,
    public sharedService: SharedService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.sharedService.username$.subscribe((username) => {
      this.user = username;
    });
    this.readlistService.getReadlist(this.user)
      .subscribe({
        next: (books: any[]) => {
          this.readlistbooks = books;
          console.log('Readlist books:', books);
        },
        error: (error: any) => {
          console.error('Error fetching readlist:', error);
          // Handle error (e.g., display an error message)
        },
        complete: () => {
          // Handle completion if needed
        }
      });
  }

  deleteFromWishlist(title: string, authors: string) {
    // Replace 'currentUsername' with the actual username of the logged-in user
    const currentUsername = this.user;

    this.wishlistService.deleteFromWishlist(currentUsername, title, authors)
      .subscribe({
        next: (response: any) => {
          this.readlistService.getReadlist(this.user)
            .subscribe({
              next: (books: any[]) => {
                this.readlistbooks = books;
                console.log('Readlist books:', books);
              },
              error: (error: any) => {
                console.error('Error fetching readlist:', error);
                // Handle error (e.g., display an error message)
              },
              complete: () => {
              }
            });
          alert('Book deleted from wishlist!');
        },
        error: (error: any) => {
          alert('Error deleting book from wishlist!');
        },
        complete: () => {
        }
      });
  }
}
