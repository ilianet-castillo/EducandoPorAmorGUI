import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarActivoAlumnoComponent} from './editar-activo-alumno.component';

describe('EditarActivoAlumnoComponent', () => {
  let component: EditarActivoAlumnoComponent;
  let fixture: ComponentFixture<EditarActivoAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarActivoAlumnoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarActivoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
