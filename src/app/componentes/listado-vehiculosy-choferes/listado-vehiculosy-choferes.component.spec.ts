import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVehiculosyChoferesComponent } from './listado-vehiculosy-choferes.component';

describe('ListadoVehiculosyChoferesComponent', () => {
  let component: ListadoVehiculosyChoferesComponent;
  let fixture: ComponentFixture<ListadoVehiculosyChoferesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoVehiculosyChoferesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVehiculosyChoferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
