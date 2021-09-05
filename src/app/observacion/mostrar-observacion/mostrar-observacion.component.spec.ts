import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarObservacionComponent} from './mostrar-observacion.component';

describe('MostrarObservacionComponent', () => {
  let component: MostrarObservacionComponent;
  let fixture: ComponentFixture<MostrarObservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarObservacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarObservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
