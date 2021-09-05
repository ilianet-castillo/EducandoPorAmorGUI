import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarEstudianteComponent} from './mostrar-estudiante.component';

describe('MostrarEstudianteComponent', () => {
  let component: MostrarEstudianteComponent;
  let fixture: ComponentFixture<MostrarEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarEstudianteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
