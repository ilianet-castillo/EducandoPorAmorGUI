import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarAsignaturaComponent} from './mostrar-asignatura.component';

describe('MostrarAsignaturaComponent', () => {
  let component: MostrarAsignaturaComponent;
  let fixture: ComponentFixture<MostrarAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarAsignaturaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
