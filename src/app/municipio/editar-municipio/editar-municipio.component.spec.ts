import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarMunicipioComponent} from './editar-municipio.component';

describe('EditarMunicipioComponent', () => {
  let component: EditarMunicipioComponent;
  let fixture: ComponentFixture<EditarMunicipioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMunicipioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
