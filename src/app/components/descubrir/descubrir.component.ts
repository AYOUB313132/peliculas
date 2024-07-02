import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioService } from '../../servicios/servicio.service';
import { Genero } from '../../interfaces/genero-interface';
import { ListaPeliculasComponent } from "../lista-peliculas/lista-peliculas.component";
import { Novedades } from '../../interfaces/Novedad-interface';
import { PeliculaComponent } from "../pelicula/pelicula.component";

@Component({
    selector: 'app-descubrir',
    standalone: true,
    templateUrl: './descubrir.component.html',
    styles: ``,
    imports: [ReactiveFormsModule, ListaPeliculasComponent, PeliculaComponent]
})
export class DescubrirComponent {

  show:boolean = true;

  public peliculas?:Novedades

  frmBusqueda:FormGroup;

  public generos?:Genero

  public hoy = new Date()

  constructor(private servicio:ServicioService){
    this.servicio.getGeneros().subscribe(d => this.generos = d)


    this.frmBusqueda = new FormGroup({
      'genero' : new FormControl(''),
      'votos' : new FormControl(4,[Validators.required, Validators.min(0), Validators.max(10), this.validateVotosRange]),
      'fecha' : new FormControl(this.hoy.toISOString().substring(0,10) ,[Validators.required]),
    })

  }

validateVotosRange(control: FormControl): { [key: string]: any } | null {
    const value = control.value;
    if (value !== null && (isNaN(value) || value < 0 || value > 10)) {
      return { 'votosRange': true };
    }
    return null;
  }


  enviar() {
    console
    if(this.frmBusqueda.valid){
      console.log("Valid")
      console.log(this.frmBusqueda.getRawValue())
      this.servicio.busqueda(this.frmBusqueda.getRawValue().fecha,this.frmBusqueda.getRawValue().votos,this.frmBusqueda.getRawValue().genero).subscribe(d => console.log(d))

      this.servicio.busqueda(this.frmBusqueda.getRawValue().fecha,
       this.frmBusqueda.getRawValue().votos,
       this.frmBusqueda.getRawValue().genero,).subscribe(d => this.peliculas = d)

    }else{
      console.log(this.frmBusqueda)
      console.log("Not Valid")
    }


  }

}
