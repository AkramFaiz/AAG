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
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(actRoute) {
        this.actRoute = actRoute;
        this.paymentDone = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentState = true;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.param = params;
            console.log(_this.param);
        });
    };
    HomeComponent.prototype.ngDoCheck = function () {
        if (this.param.payment === 'true') {
            this.paymentDone = true;
        }
        else {
            this.paymentDone = false;
        }
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            animations: [
                trigger('leafLeft', [
                    transition('void => *', [
                        animate('2s ease-in', keyframes([
                            style({
                                offset: 0,
                                opacity: 0,
                                transform: 'translateX(-100%)'
                            }),
                            style({
                                offset: 1,
                                opacity: 1,
                                transform: 'translateX(0)'
                            })
                        ]))
                    ])
                ]),
                trigger('leafRight', [
                    transition(':enter', [
                        animate('2s ease-in', keyframes([
                            style({
                                offset: 0,
                                opacity: 0,
                                transform: 'translateX(100%)'
                            }),
                            style({
                                offset: 1,
                                opacity: 1,
                                transform: 'translateX(0)'
                            })
                        ]))
                    ])
                ]),
                trigger('blurEffect', [
                    transition(':enter', [style({ opacity: 0 }), animate(5000)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map