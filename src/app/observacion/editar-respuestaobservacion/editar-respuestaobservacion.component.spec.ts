import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarRespuestaobservacionComponent} from './editar-respuestaobservacion.component';

describe('EditarRespuestaobservacionComponent', () => {
  let component: EditarRespuestaobservacionComponent;
  let fixture: ComponentFixture<EditarRespuestaobservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRespuestaobservacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRespuestaobservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
