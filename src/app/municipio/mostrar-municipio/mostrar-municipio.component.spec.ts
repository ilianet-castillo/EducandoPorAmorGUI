import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMunicipioComponent } from './mostrar-municipio.component';

describe('MostrarMunicipioComponent', () => {
  let component: MostrarMunicipioComponent;
  let fixture: ComponentFixture<MostrarMunicipioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMunicipioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
