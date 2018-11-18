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
import { PhotoSelectedCatergoryService } from 'src/app/services/photo-selected-catergory.service';
import { ActivatedRoute } from '@angular/router';
var SelectedCategoryComponent = /** @class */ (function () {
    function SelectedCategoryComponent(catSel, actRoute) {
        this.catSel = catSel;
        this.actRoute = actRoute;
        this.rangeVal = [0, 100];
        this.orderCode = 1;
        this.curKeyVal = 'cost';
    }
    SelectedCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.resData);
        this.resData = [];
        this.actRoute.params.subscribe(function (res) { _this.selValue = res.Selvalue; });
        this.catSel.getSelCat(this.selValue).subscribe(function (res) {
            _this.resData = res;
        });
    };
    SelectedCategoryComponent.prototype.onAfterChange = function (value) {
        console.log("onAfterChange: " + value);
    };
    SelectedCategoryComponent = __decorate([
        Component({
            selector: 'app-selected-category',
            templateUrl: './selected-category.component.html',
            styleUrls: ['./selected-category.component.css']
        }),
        __metadata("design:paramtypes", [PhotoSelectedCatergoryService, ActivatedRoute])
    ], SelectedCategoryComponent);
    return SelectedCategoryComponent;
}());
export { SelectedCategoryComponent };
//# sourceMappingURL=selected-category.component.js.map