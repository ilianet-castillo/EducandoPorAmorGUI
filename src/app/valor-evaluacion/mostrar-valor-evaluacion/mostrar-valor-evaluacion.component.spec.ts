import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarValorEvaluacionComponent } from './mostrar-valor-evaluacion.component';

describe('MostrarValorEvaluacionComponent', () => {
  let component: MostrarValorEvaluacionComponent;
  let fixture: ComponentFixture<MostrarValorEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarValorEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarValorEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
