import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarValorEvaluacionComponent} from './listar-valor-evaluacion.component';

describe('ListarValorEvaluacionComponent', () => {
  let component: ListarValorEvaluacionComponent;
  let fixture: ComponentFixture<ListarValorEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarValorEvaluacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarValorEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
