import { FavoritesService } from './../favorites.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<number> = [...Array(6).keys()];
  movies;
  constructor(private favoriteService: FavoritesService) { }

  ngOnInit() {
    this.movies = this.favoriteService.getFavorites();
    console.log(this.movies);
  }

}
