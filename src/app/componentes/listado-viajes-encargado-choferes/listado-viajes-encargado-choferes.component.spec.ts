import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoViajesEncargadoChoferesComponent } from './listado-viajes-encargado-choferes.component';

describe('ListadoViajesEncargadoChoferesComponent', () => {
  let component: ListadoViajesEncargadoChoferesComponent;
  let fixture: ComponentFixture<ListadoViajesEncargadoChoferesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoViajesEncargadoChoferesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoViajesEncargadoChoferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
