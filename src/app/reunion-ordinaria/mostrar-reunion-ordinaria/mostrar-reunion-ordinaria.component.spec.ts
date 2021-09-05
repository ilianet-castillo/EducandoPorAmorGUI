import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarReunionOrdinariaComponent} from './mostrar-reunion-ordinaria.component';

describe('MostrarReunionOrdinariaComponent', () => {
  let component: MostrarReunionOrdinariaComponent;
  let fixture: ComponentFixture<MostrarReunionOrdinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarReunionOrdinariaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarReunionOrdinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
