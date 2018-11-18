var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var MyCartComponent = /** @class */ (function () {
    function MyCartComponent() {
    }
    MyCartComponent.prototype.ngOnInit = function () {
    };
    MyCartComponent = __decorate([
        Component({
            selector: 'app-my-cart',
            templateUrl: './my-cart.component.html',
            styleUrls: ['./my-cart.component.css']
        })
    ], MyCartComponent);
    return MyCartComponent;
}());
export { MyCartComponent };
//# sourceMappingURL=my-cart.component.js.map