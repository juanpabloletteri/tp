import { TestBed, inject } from '@angular/core/testing';

import { AutClienteService } from './aut-cliente.service';

describe('AutClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutClienteService]
    });
  });

  it('should be created', inject([AutClienteService], (service: AutClienteService) => {
    expect(service).toBeTruthy();
  }));
});
