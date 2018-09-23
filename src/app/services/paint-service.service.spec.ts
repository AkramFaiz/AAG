import { TestBed, inject } from '@angular/core/testing';

import { PaintServiceService } from './paint-service.service';

describe('PaintServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaintServiceService]
    });
  });

  it('should be created', inject([PaintServiceService], (service: PaintServiceService) => {
    expect(service).toBeTruthy();
  }));
});
