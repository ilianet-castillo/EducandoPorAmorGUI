import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarObservacionComponent} from './adicionar-observacion.component';

describe('AdicionarObservacionComponent', () => {
  let component: AdicionarObservacionComponent;
  let fixture: ComponentFixture<AdicionarObservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarObservacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarObservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
