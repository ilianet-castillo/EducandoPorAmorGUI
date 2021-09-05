import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarNombreAnnoComponent} from './editar-nombre-anno.component';

describe('EditarNombreAnnoComponent', () => {
  let component: EditarNombreAnnoComponent;
  let fixture: ComponentFixture<EditarNombreAnnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarNombreAnnoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNombreAnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
