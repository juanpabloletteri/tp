import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoViajesChoferComponent } from './listado-viajes-chofer.component';

describe('ListadoViajesChoferComponent', () => {
  let component: ListadoViajesChoferComponent;
  let fixture: ComponentFixture<ListadoViajesChoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoViajesChoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoViajesChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
