import { Component, ElementRef, ViewChild } from '@angular/core';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent {
  model = new Movie(1, 'El Padrino', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'https://m.media-amazon.com/images/M/MV5BMjEyMjcyNGYxMF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_FMjpg_UX1000_.jpg', 1972, 'Drama', 'Francis Ford Coppola', 175, 9.2);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  addMovie(){
 
    return false ;
  }
}

 
