import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarMilitanciaComponent} from './editar-militancia.component';

describe('EditarMilitanciaComponent', () => {
  let component: EditarMilitanciaComponent;
  let fixture: ComponentFixture<EditarMilitanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMilitanciaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMilitanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
