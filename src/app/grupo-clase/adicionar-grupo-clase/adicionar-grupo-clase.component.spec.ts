import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarGrupoClaseComponent} from './adicionar-grupo-clase.component';

describe('AdicionarGrupoClaseComponent', () => {
  let component: AdicionarGrupoClaseComponent;
  let fixture: ComponentFixture<AdicionarGrupoClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarGrupoClaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarGrupoClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
