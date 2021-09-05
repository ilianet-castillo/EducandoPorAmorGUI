import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarProvinciaComponent} from './adicionar-provincia.component';

describe('AdicionarProvinciaComponent', () => {
  let component: AdicionarProvinciaComponent;
  let fixture: ComponentFixture<AdicionarProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarProvinciaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
