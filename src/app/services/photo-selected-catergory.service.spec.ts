import { TestBed, inject } from '@angular/core/testing';

import { PhotoSelectedCatergoryService } from './photo-selected-catergory.service';

describe('PhotoSelectedCatergoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoSelectedCatergoryService]
    });
  });

  it('should be created', inject([PhotoSelectedCatergoryService], (service: PhotoSelectedCatergoryService) => {
    expect(service).toBeTruthy();
  }));
});
