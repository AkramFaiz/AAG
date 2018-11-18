import { TestBed, inject } from '@angular/core/testing';
import { PhotoCategoryService } from './photo-category.service';
describe('PhotoCategoryService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PhotoCategoryService]
        });
    });
    it('should be created', inject([PhotoCategoryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=photo-category.service.spec.js.map