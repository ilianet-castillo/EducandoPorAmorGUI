import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEstadoComponent } from './mostrar-estado.component';

describe('MostrarEstadoComponent', () => {
  let component: MostrarEstadoComponent;
  let fixture: ComponentFixture<MostrarEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
