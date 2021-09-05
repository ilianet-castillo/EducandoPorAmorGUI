import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNivelEnsennanzaComponent } from './mostrar-nivel-ensennanza.component';

describe('MostrarNivelEnsennanzaComponent', () => {
  let component: MostrarNivelEnsennanzaComponent;
  let fixture: ComponentFixture<MostrarNivelEnsennanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarNivelEnsennanzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNivelEnsennanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
