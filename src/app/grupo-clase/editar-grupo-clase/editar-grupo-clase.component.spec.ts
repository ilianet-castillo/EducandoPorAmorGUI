import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarGrupoClaseComponent} from './editar-grupo-clase.component';

describe('EditarGrupoClaseComponent', () => {
  let component: EditarGrupoClaseComponent;
  let fixture: ComponentFixture<EditarGrupoClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarGrupoClaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGrupoClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
