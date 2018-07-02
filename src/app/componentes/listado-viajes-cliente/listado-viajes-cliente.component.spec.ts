import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoViajesClienteComponent } from './listado-viajes-cliente.component';

describe('ListadoViajesClienteComponent', () => {
  let component: ListadoViajesClienteComponent;
  let fixture: ComponentFixture<ListadoViajesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoViajesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoViajesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
