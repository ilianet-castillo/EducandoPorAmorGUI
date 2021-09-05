import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarMilitanciaComponent} from './listar-militancia.component';

describe('ListarMilitanciaComponent', () => {
  let component: ListarMilitanciaComponent;
  let fixture: ComponentFixture<ListarMilitanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMilitanciaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMilitanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
