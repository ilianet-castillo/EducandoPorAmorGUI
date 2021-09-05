import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarReunionOrdinariaComponent} from './adicionar-reunion-ordinaria.component';

describe('AdicionarReunionOrdinariaComponent', () => {
  let component: AdicionarReunionOrdinariaComponent;
  let fixture: ComponentFixture<AdicionarReunionOrdinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarReunionOrdinariaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarReunionOrdinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
