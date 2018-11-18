var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var CatergoryCardComponent = /** @class */ (function () {
    function CatergoryCardComponent(route) {
        this.route = route;
        this.favFlag = false;
    }
    CatergoryCardComponent.prototype.ngOnInit = function () {
        console.log(this.catergoryData);
        this.favFlag = this.catergoryData.favourite;
    };
    CatergoryCardComponent.prototype.catergoryClick = function (selVal) {
        this.route.navigate(['/selectedCat', { Selvalue: selVal }]);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CatergoryCardComponent.prototype, "catergoryData", void 0);
    CatergoryCardComponent = __decorate([
        Component({
            selector: 'app-catergory-card',
            templateUrl: './catergory-card.component.html',
            styleUrls: ['./catergory-card.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], CatergoryCardComponent);
    return CatergoryCardComponent;
}());
export { CatergoryCardComponent };
//# sourceMappingURL=catergory-card.component.js.map