import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor() {}
  getFavorites() {
    return FAVORITE_MOVIES;
  }
  getAllMovies() {
    return MOVIES;
  }
}

const MOVIES = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: "2017",
    language: "English",
    country: "USA",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2MwNjJlODAtMTc1MS00NjkwLTg2NDMtYzFjZmU2MGM1YWUwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg"
  },
  {
    title: "Batman",
    year: "1989",
    language: "English, French, Spanish",
    country: "USA, UK",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
  },
  {
    title: "Superman",
    year: "1978",
    language: "English",
    country: "USA, UK, Canada, Switzerland",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  },
  {
    title: "Inception",
    year: "2010",
    language: "English, Japanese, French",
    country: "USA, UK",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  }
];

const FAVORITE_MOVIES = [
  {
    title: "Superman",
    year: "1978",
    language: "English",
    country: "USA, UK, Canada, Switzerland",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  },
  {
    title: "Inception",
    year: "2010",
    language: "English, Japanese, French",
    country: "USA, UK",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  }
];
