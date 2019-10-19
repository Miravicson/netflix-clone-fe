import { FavoritesService } from './favorites.service';
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { AngularMaterialModule } from "./angular-material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CollapsibleWellComponent, MovieDetailsComponent, FavoritesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [FavoritesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
