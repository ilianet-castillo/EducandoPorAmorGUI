import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarValorEvaluacionComponent} from './adicionar-valor-evaluacion.component';

describe('AdicionarValorEvaluacionComponent', () => {
  let component: AdicionarValorEvaluacionComponent;
  let fixture: ComponentFixture<AdicionarValorEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarValorEvaluacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarValorEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
