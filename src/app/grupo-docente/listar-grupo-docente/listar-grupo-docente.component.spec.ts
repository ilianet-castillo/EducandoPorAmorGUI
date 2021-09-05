import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarGrupoDocenteComponent} from './listar-grupo-docente.component';

describe('ListarGrupoDocenteComponent', () => {
  let component: ListarGrupoDocenteComponent;
  let fixture: ComponentFixture<ListarGrupoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarGrupoDocenteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGrupoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
