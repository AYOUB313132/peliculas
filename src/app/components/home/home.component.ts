import { Component } from '@angular/core';
import { ListaPeliculasComponent } from "../lista-peliculas/lista-peliculas.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styles: ``,
    imports: [ListaPeliculasComponent]
})
export class HomeComponent {

}
