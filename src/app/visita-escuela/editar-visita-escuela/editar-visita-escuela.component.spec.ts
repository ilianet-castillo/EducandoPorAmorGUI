import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarVisitaEscuelaComponent} from './editar-visita-escuela.component';

describe('EditarVisitaEscuelaComponent', () => {
  let component: EditarVisitaEscuelaComponent;
  let fixture: ComponentFixture<EditarVisitaEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarVisitaEscuelaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVisitaEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
