import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarMunicipioComponent} from './adicionar-municipio.component';

describe('AdicionarMunicipioComponent', () => {
  let component: AdicionarMunicipioComponent;
  let fixture: ComponentFixture<AdicionarMunicipioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarMunicipioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
