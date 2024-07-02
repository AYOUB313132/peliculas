import { Component, Input } from '@angular/core';
import { ResultNovedades } from '../../interfaces/Novedad-interface';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [ImageURLPipe, DecimalPipe, RouterLink],
  templateUrl: './pelicula.component.html',
  styles: ``
})
export class PeliculaComponent {

  public rutaImg:string = "http://image.tmdb.org/t/p/w500/"
  @Input() public pelicula?:ResultNovedades
}
