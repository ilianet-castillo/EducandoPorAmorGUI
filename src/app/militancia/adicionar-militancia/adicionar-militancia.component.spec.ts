import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarMilitanciaComponent} from './adicionar-militancia.component';

describe('AdicionarMilitanciaComponent', () => {
  let component: AdicionarMilitanciaComponent;
  let fixture: ComponentFixture<AdicionarMilitanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarMilitanciaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarMilitanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
