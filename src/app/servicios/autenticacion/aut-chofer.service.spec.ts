import { TestBed, inject } from '@angular/core/testing';

import { AutChoferService } from './aut-chofer.service';

describe('AutChoferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutChoferService]
    });
  });

  it('should be created', inject([AutChoferService], (service: AutChoferService) => {
    expect(service).toBeTruthy();
  }));
});
