import { async, TestBed } from '@angular/core/testing';
import { PhotoDetailViewComponent } from './photo-detail-view.component';
describe('PhotoDetailViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PhotoDetailViewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PhotoDetailViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=photo-detail-view.component.spec.js.map