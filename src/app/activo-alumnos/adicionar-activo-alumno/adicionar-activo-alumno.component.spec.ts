import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarActivoAlumnoComponent} from './adicionar-activo-alumno.component';

describe('AdicionarActivoAlumnoComponent', () => {
  let component: AdicionarActivoAlumnoComponent;
  let fixture: ComponentFixture<AdicionarActivoAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarActivoAlumnoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarActivoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
