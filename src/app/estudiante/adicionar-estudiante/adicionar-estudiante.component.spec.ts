import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarEstudianteComponent} from './adicionar-estudiante.component';

describe('AdicionarEstudianteComponent', () => {
  let component: AdicionarEstudianteComponent;
  let fixture: ComponentFixture<AdicionarEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarEstudianteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
