import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoViajesEncargadoComponent } from './listado-viajes-encargado.component';

describe('ListadoViajesEncargadoComponent', () => {
  let component: ListadoViajesEncargadoComponent;
  let fixture: ComponentFixture<ListadoViajesEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoViajesEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoViajesEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
