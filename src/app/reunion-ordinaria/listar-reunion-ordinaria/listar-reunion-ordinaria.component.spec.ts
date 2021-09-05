import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarReunionOrdinariaComponent} from './listar-reunion-ordinaria.component';

describe('ListarReunionOrdinariaComponent', () => {
  let component: ListarReunionOrdinariaComponent;
  let fixture: ComponentFixture<ListarReunionOrdinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarReunionOrdinariaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReunionOrdinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
