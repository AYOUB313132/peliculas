import { Component } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ResultNovedades } from '../../interfaces/Novedad-interface';
import { ImageURLPipe } from '../../pipes/image-url.pipe';
import { DetallesPelicula } from '../../interfaces/pelicula-detalles-interface';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [ImageURLPipe,RouterLink,DecimalPipe, DatePipe],
  templateUrl: './detalles.component.html',
  styles: ``
})
export class DetallesComponent {

  public pelicula?:DetallesPelicula

   public rutaImg:string = "http://image.tmdb.org/t/p/w500/"

  constructor(private servicio:ServicioService, private ruta:ActivatedRoute){
    this.ruta.params.subscribe( p => {
      this.servicio.VerDetalles(p['id']).subscribe(d => this.pelicula = d)
    })

  }
}
