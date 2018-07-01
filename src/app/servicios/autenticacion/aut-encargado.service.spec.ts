import { TestBed, inject } from '@angular/core/testing';

import { AutEncargadoService } from './aut-encargado.service';

describe('AutEncargadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutEncargadoService]
    });
  });

  it('should be created', inject([AutEncargadoService], (service: AutEncargadoService) => {
    expect(service).toBeTruthy();
  }));
});
