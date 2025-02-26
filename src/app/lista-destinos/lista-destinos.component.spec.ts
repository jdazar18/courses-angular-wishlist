import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDestinosComponent } from './lista-destinos.component';

describe('ListaDestinosComponent', () => {
  let component: ListaDestinosComponent;
  let fixture: ComponentFixture<ListaDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDestinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
