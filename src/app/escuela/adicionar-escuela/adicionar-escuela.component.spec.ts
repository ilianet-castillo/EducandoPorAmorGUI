import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarEscuelaComponent} from './adicionar-escuela.component';

describe('AdicionarEscuelaComponent', () => {
  let component: AdicionarEscuelaComponent;
  let fixture: ComponentFixture<AdicionarEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarEscuelaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
