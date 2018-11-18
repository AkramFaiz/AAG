import { TestBed, inject } from '@angular/core/testing';
import { PaintServiceService } from './paint-service.service';
describe('PaintServiceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PaintServiceService]
        });
    });
    it('should be created', inject([PaintServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=paint-service.service.spec.js.map