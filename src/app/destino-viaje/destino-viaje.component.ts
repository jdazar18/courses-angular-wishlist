import { Component, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-destino-viaje',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent {
  @Input() destino? : DestinoViaje;
  @Input('idx') position? : number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked : EventEmitter<DestinoViaje>;

  constructor(){
    this.clicked = new EventEmitter();
  }

  ir(){
    this.clicked.emit(this.destino);
    return false;
  }
}
