import { Component } from '@angular/core';
import { GoogleBooksService } from 'src/app/google-books.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  subjects: string[] = ['Science', 'Fiction', 'History', 'Technology', 'Romance', 'Spiritual', 'Drama', 'Horror']; // You can add more subjects
  selectedSubject: string = '';
  bookSuggestions: any[] = [];
  results: number = 5;

  constructor(private googleBooksService: GoogleBooksService) { }
  onSubjectSelected() {
    if (this.selectedSubject) {
      this.googleBooksService.searchBooksBySubject(this.selectedSubject, this.results.toString())
        .subscribe((data: any) => {
          this.bookSuggestions = this.shuffleArray(data.items || []);
        });
    }
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
  reset(){
    this.results = 5;
  }
}
