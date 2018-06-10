import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaChoferComponent } from './alta-chofer.component';

describe('AltaChoferComponent', () => {
  let component: AltaChoferComponent;
  let fixture: ComponentFixture<AltaChoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaChoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
