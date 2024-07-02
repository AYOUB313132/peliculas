import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Novedades, ResultNovedades } from '../interfaces/Novedad-interface';
import { DetallesPelicula } from '../interfaces/pelicula-detalles-interface';
import { Genero } from '../interfaces/genero-interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public GENERAL:string = "https://developers.themoviedb.org/3/getting-started/introduction"
  public GENERO:string = "https://api.themoviedb.org/3/genre/movie/list"
  public NOVEDADES:string = "https://api.themoviedb.org/3/movie/now_playing"
  public MOVIE:string = "https://api.themoviedb.org/3/movie"
  public BUSCAR:string = "https://api.themoviedb.org/3/discover/movie"

  constructor(private http:HttpClient) { }


  getNovedades():Observable<Novedades>{
    return this.http.get<Novedades>(this.NOVEDADES,{
      params:{
        "api_key" : "9da92b828e2e902b54327b4cedfd6ef6",
        "language" : "es"
      }
    }).pipe( map((novedades: Novedades) => {
        const novedadesOrdenadas = novedades.results.sort((a, b) => b.vote_average - a.vote_average);
        return { ...novedades, results: novedadesOrdenadas };
      })
    );
  }


  VerDetalles(id:number):Observable<DetallesPelicula>{
    return this.http.
    get<DetallesPelicula>("https://api.themoviedb.org/3/movie/" + id,{
      params:{
        "api_key" : "9da92b828e2e902b54327b4cedfd6ef6",
        "language" : "es"
      }
    })
  }


getGeneros():Observable<Genero>{
    return this.http.get<Genero>(this.GENERO,{
      params:{
        "api_key" : "9da92b828e2e902b54327b4cedfd6ef6",
        "language" : "es"
      }
    })
  }

  busqueda(fecha:string,votos:number,gener:number):Observable<Novedades>{
    return this.http.
    get<Novedades>(this.BUSCAR,{
      params:{
        "api_key" : "9da92b828e2e902b54327b4cedfd6ef6",
        "language" : "es",
        "sort_by" : "popularity.desc",
        "release_date.gte" : fecha,
        "vote_average.gte" : votos,
        "with_genres" : gener
      }
    }).pipe( map((novedades: Novedades) => {
        const novedadesOrdenadas = novedades.results.sort((a, b) => b.vote_average - a.vote_average);
        return { ...novedades, results: novedadesOrdenadas };
      })
    );
  }

}
