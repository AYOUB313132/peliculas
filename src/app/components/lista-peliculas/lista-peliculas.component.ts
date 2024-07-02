import { Component, Input } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';
import { PeliculaComponent } from "../pelicula/pelicula.component";
import { Novedades } from '../../interfaces/Novedad-interface';

@Component({
    selector: 'app-lista-peliculas',
    standalone: true,
    templateUrl: './lista-peliculas.component.html',
    styles: ``,
    imports: [PeliculaComponent]
})
export class ListaPeliculasComponent {

  public peliculas?:Novedades

  constructor(private servicio:ServicioService){
    this.servicio.getNovedades().subscribe(d => this.peliculas =d)
  }
}
