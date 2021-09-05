import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarEscuelaComponent} from './mostrar-escuela.component';

describe('MostrarEscuelaComponent', () => {
  let component: MostrarEscuelaComponent;
  let fixture: ComponentFixture<MostrarEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarEscuelaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
