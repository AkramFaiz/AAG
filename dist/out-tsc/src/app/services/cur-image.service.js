var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaintServiceService } from './paint-service.service';
var CurImageService = /** @class */ (function () {
    function CurImageService(paintS) {
        this.paintS = paintS;
        this.imgVal = new BehaviorSubject('');
    }
    Object.defineProperty(CurImageService.prototype, "curImg", {
        get: function () {
            console.log(this.imgVal);
            return this.imgVal.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CurImageService.prototype.setCurImg = function (val) {
        console.log('curimgaserv', val);
        this.paintS.saveEditItem_Paint(val._id, val).subscribe(function (res) { return console.log('UpdatedCurImg:', res); });
        this.imgVal.next(val);
    };
    CurImageService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [PaintServiceService])
    ], CurImageService);
    return CurImageService;
}());
export { CurImageService };
//# sourceMappingURL=cur-image.service.js.map