import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarViajeComponent } from './agregar-viaje.component';

describe('AgregarViajeComponent', () => {
  let component: AgregarViajeComponent;
  let fixture: ComponentFixture<AgregarViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
