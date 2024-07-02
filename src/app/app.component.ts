import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from './servicios/servicio.service';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'Examen-HAC';

  constructor(private servicio:ServicioService){
    //this.servicio.getNovedades().subscribe(d => console.log(d))
    //this.servicio.VerDetalles(3).subscribe(d => console.log(d))
    //this.servicio.getGeneros().subscribe(d => console.log(d))
    //this.servicio.busqueda('2020-01-01',7,5).subscribe(d => console.log(d))
  }
}
