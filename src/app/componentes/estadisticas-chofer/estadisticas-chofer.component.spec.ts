import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasChoferComponent } from './estadisticas-chofer.component';

describe('EstadisticasChoferComponent', () => {
  let component: EstadisticasChoferComponent;
  let fixture: ComponentFixture<EstadisticasChoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasChoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
