import { TestBed, inject } from '@angular/core/testing';

import { CurImageService } from './cur-image.service';

describe('CurImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurImageService]
    });
  });

  it('should be created', inject([CurImageService], (service: CurImageService) => {
    expect(service).toBeTruthy();
  }));
});
