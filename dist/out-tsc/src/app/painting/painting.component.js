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
import { PaintServiceService } from '../services/paint-service.service';
import { CurImageService } from '../services/cur-image.service';
var PaintingComponent = /** @class */ (function () {
    function PaintingComponent(paintS, imgS) {
        this.paintS = paintS;
        this.imgS = imgS;
        this.images = [];
        this.rangeVal = [0, 100];
        this.orderCode = 1;
        this.curKeyVal = 'cost';
    }
    PaintingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paintS.getList_Paint().subscribe(function (res) { _this.images = res; console.log('PaintData', _this.images); });
    };
    PaintingComponent.prototype.ngDoCheck = function () {
        console.log('All_images', this.images);
    };
    PaintingComponent.prototype.onAfterChange = function (value) {
        console.log("onAfterChange: " + value);
    };
    PaintingComponent = __decorate([
        Component({
            selector: 'app-painting',
            templateUrl: './painting.component.html',
            styleUrls: ['./painting.component.css']
        }),
        __metadata("design:paramtypes", [PaintServiceService, CurImageService])
    ], PaintingComponent);
    return PaintingComponent;
}());
export { PaintingComponent };
//# sourceMappingURL=painting.component.js.map