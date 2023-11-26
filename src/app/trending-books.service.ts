import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingBooksService {
books=[
  {
    title: "It Starts With Us",
    author: "Colleen Hoover",
    coverImg: "../assets/TrendingBooks/It-Starts-With-Us.webp",
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    coverImg: "../assets/TrendingBooks/It-Ends-With-Us.webp",
  },
  {
    title: "Ugly Love",
    author: "Colleen Hoover",
    coverImg: "../assets/TrendingBooks/Ugly Love.jpg",
},
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImg: "../assets/TrendingBooks/The-Alchemist.webp",
  },
  {
    title: "Ikigai",
    author: " Héctor García, Francesc Miralles",
    coverImg: "../assets/TrendingBooks/Ikigai.jpg",
},
{
    title: "The Client",
    author: "John Grisham",
    coverImg: "../assets/TrendingBooks/The-client.jpg",
    },
]
}
