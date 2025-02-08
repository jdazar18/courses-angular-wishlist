import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-form-destino-viaje',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-destino-viaje.component.html',
  styleUrl: './form-destino-viaje.component.css'
})
export class FormDestinoViajeComponent {

  @Output () onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;

  minLong = 4;

  constructor(fb: FormBuilder){
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([
        Validators.required, this.nameValidatorParametrizable(this.minLong)
      ])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('Cambio en el formulario: ', form);
    });
  }

  guardar(nombre: string, url: string): boolean{
    const d = new DestinoViaje(nombre, url, 0);
    this.onItemAdded.emit(d);
    return false;
  }


  nameValidator(control: FormControl) : { [s: string]: boolean } | null {
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5){
      return {invalidName: true};
    }
    return null;
  }

  nameValidatorParametrizable(minLong: number): ValidatorFn{
    return (control: AbstractControl): { [s: string]: boolean } | null => {
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLong){
        return {minLongName: true};
      }
      return null;
  }

}

}
