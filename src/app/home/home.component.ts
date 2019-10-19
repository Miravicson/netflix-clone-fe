import { MoviesService } from "./../movies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies;
  currentTabIndex: number = 0;
  tabIndexMap = {
    movies: 0,
    favorites: 1
  };
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getAllMovies();
  }
  fetchMovieByTabIndex(tabIndex) {
    switch (tabIndex) {
      case 1:
        return this.moviesService.getFavorites();
      default:
        return this.moviesService.getAllMovies();
    }
  }
  setTabIndex(index) {
    this.currentTabIndex = index;
    this.movies = this.fetchMovieByTabIndex(this.currentTabIndex);
  }
}
