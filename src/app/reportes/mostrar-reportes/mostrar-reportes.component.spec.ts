import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MostrarReportesComponent} from './mostrar-reportes.component';

describe('MostrarReportesComponent', () => {
  let component: MostrarReportesComponent;
  let fixture: ComponentFixture<MostrarReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarReportesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
