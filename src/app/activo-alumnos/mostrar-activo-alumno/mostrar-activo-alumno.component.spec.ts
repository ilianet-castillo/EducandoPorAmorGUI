import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarActivoAlumnoComponent} from './mostrar-activo-alumno.component';

describe('MostrarActivoAlumnoComponent', () => {
  let component: MostrarActivoAlumnoComponent;
  let fixture: ComponentFixture<MostrarActivoAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarActivoAlumnoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarActivoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
