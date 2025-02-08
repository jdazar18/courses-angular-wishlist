import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViajeComponent } from "../destino-viaje/destino-viaje.component";
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormDestinoViajeComponent } from "../form-destino-viaje/form-destino-viaje.component";
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  imports: [DestinoViajeComponent, CommonModule, FormDestinoViajeComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css',
  providers: [DestinosApiClient]
})
export class ListaDestinosComponent {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  updates : string[];
  
  constructor(public destinosApiClient: DestinosApiClient){
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
      if (d != null){
        this.updates.push('Se ha elegido a ' + d.nombre);
      }
    });
  }

  agregado(d: DestinoViaje){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(d: DestinoViaje){
    this.destinosApiClient.elegir(d);
  }
}
