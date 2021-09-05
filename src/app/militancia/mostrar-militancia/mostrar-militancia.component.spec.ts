import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMilitanciaComponent } from './mostrar-militancia.component';

describe('MostrarMilitanciaComponent', () => {
  let component: MostrarMilitanciaComponent;
  let fixture: ComponentFixture<MostrarMilitanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMilitanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMilitanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
