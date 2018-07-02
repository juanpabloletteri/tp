import { TestBed, inject } from '@angular/core/testing';

import { DatosUsuarioService } from './datos-usuario.service';

describe('DatosUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosUsuarioService]
    });
  });

  it('should be created', inject([DatosUsuarioService], (service: DatosUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
