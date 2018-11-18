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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
var PaintServiceService = /** @class */ (function () {
    function PaintServiceService(_http) {
        this._http = _http;
    }
    PaintServiceService.prototype.ngOnInit = function () {
    };
    PaintServiceService.prototype.getList_Paint = function () {
        var _this = this;
        var headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this._http.get('/painting').pipe(map(function (result) { return _this.result = result; }));
    };
    // update
    PaintServiceService.prototype.saveEditItem_Paint = function (id, item) {
        var _this = this;
        return this._http.put('/painting/' + id, item)
            .pipe(map(function (res) { _this.updatedResult = res; console.log('UpadtedImg in Paint service:', _this.updatedResult); }));
    };
    PaintServiceService.prototype.getUpadtedImg = function () {
        console.log('getUpadtedImg', this.updatedResult);
        return this.updatedResult;
    };
    PaintServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PaintServiceService);
    return PaintServiceService;
}());
export { PaintServiceService };
//# sourceMappingURL=paint-service.service.js.map