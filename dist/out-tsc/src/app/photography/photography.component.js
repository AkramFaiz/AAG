var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PhotoCategoryService } from '../services/photo-category.service';
var PhotographyComponent = /** @class */ (function () {
    function PhotographyComponent(photoCatSer) {
        this.photoCatSer = photoCatSer;
    }
    PhotographyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoCatSer.getCategories().subscribe(function (res) { return _this.categories = res; });
    };
    PhotographyComponent = __decorate([
        Component({
            selector: 'app-photography',
            templateUrl: './photography.component.html',
            styleUrls: ['./photography.component.css']
        }),
        __metadata("design:paramtypes", [PhotoCategoryService])
    ], PhotographyComponent);
    return PhotographyComponent;
}());
export { PhotographyComponent };
//# sourceMappingURL=photography.component.js.map