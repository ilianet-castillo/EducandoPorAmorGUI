import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGrupoClaseComponent } from './mostrar-grupo-clase.component';

describe('MostrarGrupoClaseComponent', () => {
  let component: MostrarGrupoClaseComponent;
  let fixture: ComponentFixture<MostrarGrupoClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarGrupoClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGrupoClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
