import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarValorEvaluacionComponent} from './editar-valor-evaluacion.component';

describe('EditarValorEvaluacionComponent', () => {
  let component: EditarValorEvaluacionComponent;
  let fixture: ComponentFixture<EditarValorEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarValorEvaluacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarValorEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
