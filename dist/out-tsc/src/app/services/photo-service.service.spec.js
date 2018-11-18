import { TestBed, inject } from '@angular/core/testing';
import { PhotoServiceService } from './photo-service.service';
describe('PhotoServiceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PhotoServiceService]
        });
    });
    it('should be created', inject([PhotoServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=photo-service.service.spec.js.map