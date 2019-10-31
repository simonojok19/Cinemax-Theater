import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HallMapComponent } from './hall-map/hall-map.component';
import { HttpClientModule } from '@angular/common/http';
import { FileReaderService } from './file-reader.service';
import { SellModalComponent } from './shared/sell-modal/sell-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    NavBarComponent,
    MovieListComponent,
    MovieDetailsComponent,
    HallMapComponent,
    SellModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FileReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
