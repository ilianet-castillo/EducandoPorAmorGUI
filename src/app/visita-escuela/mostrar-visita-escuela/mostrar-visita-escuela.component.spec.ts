import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarVisitaEscuelaComponent} from './mostrar-visita-escuela.component';

describe('MostrarVisitaEscuelaComponent', () => {
  let component: MostrarVisitaEscuelaComponent;
  let fixture: ComponentFixture<MostrarVisitaEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarVisitaEscuelaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarVisitaEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
