import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarRespuestaobservacionComponent} from './adicionar-respuestaobservacion.component';

describe('AdicionarRespuestaobservacionComponent', () => {
  let component: AdicionarRespuestaobservacionComponent;
  let fixture: ComponentFixture<AdicionarRespuestaobservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarRespuestaobservacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarRespuestaobservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
