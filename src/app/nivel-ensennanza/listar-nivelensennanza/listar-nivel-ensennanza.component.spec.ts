import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListarNivelEnsennanzaComponent} from './listar-nivel-ensennanza.component';

describe('ListarNivelEnsennanzaComponent', () => {
  let component: ListarNivelEnsennanzaComponent;
  let fixture: ComponentFixture<ListarNivelEnsennanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarNivelEnsennanzaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNivelEnsennanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
