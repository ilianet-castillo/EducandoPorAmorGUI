import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProvinciaComponent } from './mostrar-provincia.component';

describe('MostrarProvinciaComponent', () => {
  let component: MostrarProvinciaComponent;
  let fixture: ComponentFixture<MostrarProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarProvinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
