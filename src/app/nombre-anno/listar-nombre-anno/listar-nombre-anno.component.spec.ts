import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarNombreAnnoComponent} from './listar-nombre-anno.component';

describe('ListarNombreAnnoComponent', () => {
  let component: ListarNombreAnnoComponent;
  let fixture: ComponentFixture<ListarNombreAnnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarNombreAnnoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNombreAnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
