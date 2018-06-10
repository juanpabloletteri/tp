import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEncargadosComponent } from './listado-encargados.component';

describe('ListadoEncargadosComponent', () => {
  let component: ListadoEncargadosComponent;
  let fixture: ComponentFixture<ListadoEncargadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEncargadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEncargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
