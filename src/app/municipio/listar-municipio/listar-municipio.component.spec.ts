import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarMunicipioComponent} from './listar-municipio.component';

describe('ListarMunicipioComponent', () => {
  let component: ListarMunicipioComponent;
  let fixture: ComponentFixture<ListarMunicipioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMunicipioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
