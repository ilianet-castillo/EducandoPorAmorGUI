import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarGradoEscolarComponent} from './listar-grado-escolar.component';

describe('ListarGradoEscolarComponent', () => {
  let component: ListarGradoEscolarComponent;
  let fixture: ComponentFixture<ListarGradoEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarGradoEscolarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGradoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
