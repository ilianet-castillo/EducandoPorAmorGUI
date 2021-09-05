import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarProvinciaComponent} from './listar-provincia.component';

describe('ListarProvinciaComponent', () => {
  let component: ListarProvinciaComponent;
  let fixture: ComponentFixture<ListarProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProvinciaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
