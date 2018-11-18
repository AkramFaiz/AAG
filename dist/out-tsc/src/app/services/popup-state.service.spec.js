import { TestBed, inject } from '@angular/core/testing';
import { PopupStateService } from './popup-state.service';
describe('PopupStateService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PopupStateService]
        });
    });
    it('should be created', inject([PopupStateService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=popup-state.service.spec.js.map