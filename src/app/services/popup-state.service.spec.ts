import { TestBed, inject } from '@angular/core/testing';

import { PopupStateService } from './popup-state.service';

describe('PopupStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupStateService]
    });
  });

  it('should be created', inject([PopupStateService], (service: PopupStateService) => {
    expect(service).toBeTruthy();
  }));
});
