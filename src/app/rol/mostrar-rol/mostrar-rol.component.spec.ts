import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRolComponent } from './mostrar-rol.component';

describe('MostrarRolComponent', () => {
  let component: MostrarRolComponent;
  let fixture: ComponentFixture<MostrarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
