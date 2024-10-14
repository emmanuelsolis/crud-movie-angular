import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];
  private moviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor() {
    // Initialize with some sample data
    this.movies = [
      { id: 1, title: 'Inception', description: 'A thief who enters the dreams of others to steal secrets from their subconscious.', image: 'https://example.com/inception.jpg', releaseYear: 2010, genre: 'Sci-Fi', director: 'Christopher Nolan', duration: 148, rating: 8.8 },
      { id: 2, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', image: 'https://example.com/shawshank.jpg', releaseYear: 1994, genre: 'Drama', director: 'Frank Darabont', duration: 142, rating: 9.3 },
    ];
    this.moviesSubject.next(this.movies);
  }

  getMovies(): Observable<Movie[]> {
    return this.moviesSubject.asObservable();
  }
  getMovieById(id: number): Observable<Movie> {
    const movie = this.movies.find(m => m.id === id);
    return new Observable<Movie>(observer => {
      if (movie) {
        observer.next(movie);
        observer.complete();
      } else {
        observer.error('Movie not found');
      }
    });
  }

  addMovie(movie: Movie): void {
    movie.id = this.movies.length + 1;
    this.movies.push(movie);
    this.moviesSubject.next(this.movies);
  }

  updateMovie(updatedMovie: Movie): void {
    const index = this.movies.findIndex(m => m.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
      this.moviesSubject.next(this.movies);
    }
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(m => m.id !== id);
    this.moviesSubject.next(this.movies);
  }
}