import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarReunionOrdinariaComponent} from './editar-reunion-ordinaria.component';

describe('EditarReunionOrdinariaComponent', () => {
  let component: EditarReunionOrdinariaComponent;
  let fixture: ComponentFixture<EditarReunionOrdinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReunionOrdinariaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReunionOrdinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
