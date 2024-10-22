import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieDetailComponent, MovieListComponent, MovieFormComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-movie-angular';
  @ViewChild('exampleModal') model: ElementRef | undefined;

  openModal(){
    if (this.model && this.model.nativeElement) {
      this.model.nativeElement.style.display = 'block';
    }
  }
  closeModal() {
    if (this.model && this.model.nativeElement) {
      this.model.nativeElement.style.display = 'none';
    }
  }
}
