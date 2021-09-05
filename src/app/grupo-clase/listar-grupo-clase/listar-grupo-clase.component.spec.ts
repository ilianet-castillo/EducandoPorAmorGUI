import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarGrupoClaseComponent} from './listar-grupo-clase.component';

describe('ListarGrupoClaseComponent', () => {
  let component: ListarGrupoClaseComponent;
  let fixture: ComponentFixture<ListarGrupoClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarGrupoClaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGrupoClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
