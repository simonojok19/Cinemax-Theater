import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FileReaderService } from './file-reader.service';


const routes: Routes = [
  {path: 'add-movie', component: AddMovieComponent},
  {path: 'movies', component: MovieListComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies/:id/book', component: MovieDetailsComponent, resolve: { prices : FileReaderService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
