import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarVisitaEscuelaComponent} from './adicionar-visita-escuela.component';

describe('AdicionarVisitaEscuelaComponent', () => {
  let component: AdicionarVisitaEscuelaComponent;
  let fixture: ComponentFixture<AdicionarVisitaEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarVisitaEscuelaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarVisitaEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
