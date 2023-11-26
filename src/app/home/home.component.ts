import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingBooksService } from '../trending-books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
trending:any[] =[]
constructor(private tbook:TrendingBooksService){
    this.trending= tbook.books
}
}
