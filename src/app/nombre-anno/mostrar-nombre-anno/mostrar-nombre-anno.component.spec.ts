import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNombreAnnoComponent } from './mostrar-nombre-anno.component';

describe('MostrarNombreAnnoComponent', () => {
  let component: MostrarNombreAnnoComponent;
  let fixture: ComponentFixture<MostrarNombreAnnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarNombreAnnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNombreAnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
