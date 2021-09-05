import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarVisitaEscuelaComponent} from './listar-visita-escuela.component';

describe('ListarVisitaEscuelaComponent', () => {
  let component: ListarVisitaEscuelaComponent;
  let fixture: ComponentFixture<ListarVisitaEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVisitaEscuelaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVisitaEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
