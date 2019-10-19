import { FavoritesService } from "./../favorites.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: any;
  constructor(private favoriteService: FavoritesService) {}

  ngOnInit() {
    this.favoriteMovies = this.favoriteService.getFavorites()
    console.log(this.favoriteMovies);
  }
}
