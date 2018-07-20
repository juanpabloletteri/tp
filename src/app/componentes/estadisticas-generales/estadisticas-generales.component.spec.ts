import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasGeneralesComponent } from './estadisticas-generales.component';

describe('EstadisticasGeneralesComponent', () => {
  let component: EstadisticasGeneralesComponent;
  let fixture: ComponentFixture<EstadisticasGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
