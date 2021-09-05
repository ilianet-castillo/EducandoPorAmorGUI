import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarAsignaturaComponent} from './listar-asignatura.component';

describe('ListarAsignaturaComponent', () => {
  let component: ListarAsignaturaComponent;
  let fixture: ComponentFixture<ListarAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAsignaturaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
