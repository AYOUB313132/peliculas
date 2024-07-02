import { DescubrirComponent } from './components/descubrir/descubrir.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'detalles/:id', component: DetallesComponent },
  {path: 'descubrir', component: DescubrirComponent},
  {path: '**', redirectTo:'home'}
];

