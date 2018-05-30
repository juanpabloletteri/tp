import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEncargadoComponent } from './agregar-encargado.component';

describe('AgregarEncargadoComponent', () => {
  let component: AgregarEncargadoComponent;
  let fixture: ComponentFixture<AgregarEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
