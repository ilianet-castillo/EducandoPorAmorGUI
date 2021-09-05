import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarEstadoComponent} from './adicionar-estado.component';

describe('AddEstadoComponent', () => {
  let component: AdicionarEstadoComponent;
  let fixture: ComponentFixture<AdicionarEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarEstadoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
