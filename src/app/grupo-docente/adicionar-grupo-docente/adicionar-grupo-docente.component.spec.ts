import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarGrupoDocenteComponent} from './adicionar-grupo-docente.component';

describe('AdicionarGrupoDocenteComponent', () => {
  let component: AdicionarGrupoDocenteComponent;
  let fixture: ComponentFixture<AdicionarGrupoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarGrupoDocenteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarGrupoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
