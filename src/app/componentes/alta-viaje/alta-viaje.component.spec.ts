import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaViajeComponent } from './alta-viaje.component';

describe('AltaViajeComponent', () => {
  let component: AltaViajeComponent;
  let fixture: ComponentFixture<AltaViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
