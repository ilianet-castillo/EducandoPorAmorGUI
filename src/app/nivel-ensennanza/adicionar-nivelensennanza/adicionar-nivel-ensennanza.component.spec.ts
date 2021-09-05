import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarNivelEnsennanzaComponent} from './adicionar-nivel-ensennanza.component';

describe('AdicionarNivelEnsennanzaComponent', () => {
  let component: AdicionarNivelEnsennanzaComponent;
  let fixture: ComponentFixture<AdicionarNivelEnsennanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarNivelEnsennanzaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarNivelEnsennanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
