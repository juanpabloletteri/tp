import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionVehiculoComponent } from './seleccion-vehiculo.component';

describe('SeleccionVehiculoComponent', () => {
  let component: SeleccionVehiculoComponent;
  let fixture: ComponentFixture<SeleccionVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
