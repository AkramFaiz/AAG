import { TestBed, inject } from '@angular/core/testing';

import { PhotoCategoryService } from './photo-category.service';

describe('PhotoCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoCategoryService]
    });
  });

  it('should be created', inject([PhotoCategoryService], (service: PhotoCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
