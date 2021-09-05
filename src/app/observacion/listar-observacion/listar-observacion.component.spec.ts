import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarObservacionComponent} from './listar-observacion.component';

describe('ListarObservacionComponent', () => {
  let component: ListarObservacionComponent;
  let fixture: ComponentFixture<ListarObservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarObservacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarObservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
