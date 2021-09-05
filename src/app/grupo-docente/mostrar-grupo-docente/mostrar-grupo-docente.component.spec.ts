import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGrupoDocenteComponent } from './mostrar-grupo-docente.component';

describe('MostrarGrupoDocenteComponent', () => {
  let component: MostrarGrupoDocenteComponent;
  let fixture: ComponentFixture<MostrarGrupoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarGrupoDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGrupoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
