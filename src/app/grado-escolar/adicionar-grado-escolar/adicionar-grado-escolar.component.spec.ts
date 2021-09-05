import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarGradoEscolarComponent} from './adicionar-grado-escolar.component';

describe('AdicionarGradoEscolarComponent', () => {
  let component: AdicionarGradoEscolarComponent;
  let fixture: ComponentFixture<AdicionarGradoEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarGradoEscolarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarGradoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
