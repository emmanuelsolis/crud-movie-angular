import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent {
  @ViewChild('exampleModal') model: ElementRef | undefined;


  closeModal() {
    if (this.model && this.model.nativeElement) {
      this.model.nativeElement.style.display = 'none';
    }
  }
}
