import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarGrupoDocenteComponent} from './editar-grupo-docente.component';

describe('EditarGrupoDocenteComponent', () => {
  let component: EditarGrupoDocenteComponent;
  let fixture: ComponentFixture<EditarGrupoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarGrupoDocenteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGrupoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
