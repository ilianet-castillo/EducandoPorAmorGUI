import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarGradoEscolarComponent} from './editar-grado-escolar.component';

describe('EditarGradoEscolarComponent', () => {
  let component: EditarGradoEscolarComponent;
  let fixture: ComponentFixture<EditarGradoEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarGradoEscolarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGradoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
