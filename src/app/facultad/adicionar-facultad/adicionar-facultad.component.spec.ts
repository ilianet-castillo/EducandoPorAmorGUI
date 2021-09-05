import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarFacultadComponent} from './adicionar-facultad.component';

describe('AdicionarFacultadComponent', () => {
  let component: AdicionarFacultadComponent;
  let fixture: ComponentFixture<AdicionarFacultadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarFacultadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
