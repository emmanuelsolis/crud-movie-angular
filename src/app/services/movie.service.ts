import {Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
    private localStorageKey = 'movies';

    constructor() { }

    //Obtener Lista de peliculas
    getMovies(): Movie[]{
        const moviesData = localStorage.getItem(this.localStorageKey);
        return moviesData ? JSON.parse(moviesData) : [];
    }

    // Obtiene Detalle de pelicula por su ID
    getMovieById(id: number): Movie | undefined {
        return this.getMovies().find(movie=> movie.id === id);
    }

    // Agrega una nueva pelicula
    addMovie(movie: Movie): void {
        const movies = this.getMovies();
        movie.id = new Date().getTime();//Generar un ID único para la película basado en el timestamp actual
        movies.push(movie);
        this.saveMovies(movies);
    }

    //Guardar la pelicula en el localStorage
    private saveMovies(movies: Movie[]): void {
        localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
    }

    //Actualizar una pelicula existente o editarla
    editMovie(updatedMovie: Movie): void {
        const movies = this.getMovies().map(movie=> {
            if(movie.id === updatedMovie.id){
                return updatedMovie;
            }
            return movie;
        });
        this.saveMovies(movies);
    }

    //Eliminar una pelicula
    deleteMovie(id:number): void {
        const movies = this.getMovies().filter(movie=> movie.id !== id);
        this.saveMovies(movies);
    }
    //Buscar peliculas por titulo
    searchMovies(title: string): Movie[] {
        const movies = this.getMovies();
        return movies.filter(movie=> movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    //Buscar peliculas por genero
    searchMoviesByGenre(genre: string): Movie[] {
        const movies = this.getMovies();
        return movies.filter(movie=> movie.genre.toLowerCase().includes(genre.toLowerCase()));
    }
}


