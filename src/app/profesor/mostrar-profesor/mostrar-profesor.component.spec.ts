import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarProfesorComponent} from './mostrar-profesor.component';

describe('MostrarProfesorComponent', () => {
  let component: MostrarProfesorComponent;
  let fixture: ComponentFixture<MostrarProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarProfesorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
