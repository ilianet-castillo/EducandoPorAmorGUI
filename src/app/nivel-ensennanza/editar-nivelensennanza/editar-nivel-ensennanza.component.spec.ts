import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditarNivelEnsennanzaComponent} from './editar-nivel-ensennanza.component';

describe('EditarNivelEnsennanzaComponent', () => {
  let component: EditarNivelEnsennanzaComponent;
  let fixture: ComponentFixture<EditarNivelEnsennanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditarNivelEnsennanzaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNivelEnsennanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
