import { TestBed, inject } from '@angular/core/testing';
import { CurImageService } from './cur-image.service';
describe('CurImageService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CurImageService]
        });
    });
    it('should be created', inject([CurImageService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cur-image.service.spec.js.map