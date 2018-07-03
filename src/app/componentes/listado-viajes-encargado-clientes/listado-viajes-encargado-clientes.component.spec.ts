import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoViajesEncargadoClientesComponent } from './listado-viajes-encargado-clientes.component';

describe('ListadoViajesEncargadoClientesComponent', () => {
  let component: ListadoViajesEncargadoClientesComponent;
  let fixture: ComponentFixture<ListadoViajesEncargadoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoViajesEncargadoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoViajesEncargadoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
