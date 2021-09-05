import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarNombreAnnoComponent} from './adicionar-nombre-anno.component';

describe('AdicionarNombreAnnoComponent', () => {
  let component: AdicionarNombreAnnoComponent;
  let fixture: ComponentFixture<AdicionarNombreAnnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarNombreAnnoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarNombreAnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
