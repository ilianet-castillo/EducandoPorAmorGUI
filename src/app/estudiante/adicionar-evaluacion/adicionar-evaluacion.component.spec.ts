import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarEvaluacionComponent} from './adicionar-evaluacion.component';

describe('AdicionarEvaluacionComponent', () => {
  let component: AdicionarEvaluacionComponent;
  let fixture: ComponentFixture<AdicionarEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarEvaluacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
