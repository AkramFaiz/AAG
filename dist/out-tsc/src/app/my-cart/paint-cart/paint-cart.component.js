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
import { MessageService } from 'primeng/api';
import { PaintServiceService } from '../../services/paint-service.service';
import { Router } from '@angular/router';
var PaintCartComponent = /** @class */ (function () {
    function PaintCartComponent(paintS, messageService, route) {
        this.paintS = paintS;
        this.messageService = messageService;
        this.route = route;
        this.cardItems = [];
        this.totalCost = 0;
        this.clickPurse = false;
        this.clickPaytm = false;
        this.clickaPay = false;
        this.clickCard = false;
        this.proFlag = false;
    }
    PaintCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paintS.getList_Paint().subscribe(function (res) {
            _this.resItems = res;
            _this.resItems.forEach(function (ele) {
                if (ele.addedToCart === true) {
                    _this.cardItems.push(ele);
                    _this.totalCost += ele.cost;
                    console.log(_this.cardItems);
                }
            });
        });
    };
    PaintCartComponent.prototype.proceedClk = function () {
        var _this = this;
        setTimeout(function () {
            _this.proFlag = false;
            _this.messageService.add({ key: 'payment', severity: 'success', summary: 'Success', detail: 'Process Completed Successfully.' });
        }, 3000);
        setTimeout(function () {
            _this.route.navigate(['/'], { queryParams: { payment: true } });
            _this.cardItems = [];
        }, 7500);
    };
    PaintCartComponent = __decorate([
        Component({
            selector: 'app-paint-cart',
            templateUrl: './paint-cart.component.html',
            styleUrls: ['./paint-cart.component.css']
        }),
        __metadata("design:paramtypes", [PaintServiceService, MessageService, Router])
    ], PaintCartComponent);
    return PaintCartComponent;
}());
export { PaintCartComponent };
//# sourceMappingURL=paint-cart.component.js.map