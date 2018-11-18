import { TestBed, inject } from '@angular/core/testing';
import { PhotoSelectedCatergoryService } from './photo-selected-catergory.service';
describe('PhotoSelectedCatergoryService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PhotoSelectedCatergoryService]
        });
    });
    it('should be created', inject([PhotoSelectedCatergoryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=photo-selected-catergory.service.spec.js.map