import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarRolComponent} from './adicionar-rol.component';

describe('AdicionarRolComponent', () => {
  let component: AdicionarRolComponent;
  let fixture: ComponentFixture<AdicionarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarRolComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
