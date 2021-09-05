import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGradoEscolarComponent } from './mostrar-grado-escolar.component';

describe('MostrarGradoEscolarComponent', () => {
  let component: MostrarGradoEscolarComponent;
  let fixture: ComponentFixture<MostrarGradoEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarGradoEscolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGradoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
