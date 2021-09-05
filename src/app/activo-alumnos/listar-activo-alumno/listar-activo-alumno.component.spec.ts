import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarActivoAlumnoComponent} from './listar-activo-alumno.component';

describe('ListarActivoAlumnoComponent', () => {
  let component: ListarActivoAlumnoComponent;
  let fixture: ComponentFixture<ListarActivoAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarActivoAlumnoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActivoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
