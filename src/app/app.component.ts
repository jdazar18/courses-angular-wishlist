import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDestinosComponent } from "./lista-destinos/lista-destinos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDestinosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wishlist';
}
