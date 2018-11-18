var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from 'events';
var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.subjectVal = new BehaviorSubject(false);
        this.userClk = new EventEmitter();
    }
    LoginService.prototype.ngOnInit = function () {
        // this._http.get('/login').subscribe(res => this.result = res);
        // console.log(this.result);
        // return this._http.get('/login').map(result => this.result = result.json());
    };
    LoginService.prototype.loginCall = function (creds, res) {
        if (res !== undefined) {
            for (var s = 0; s < res.length; s++) {
                if (res[s].username === creds.username && res[s].password === creds.password) {
                    this.setLoginSts(true + ',' + res[s].admin);
                }
            }
        }
        else {
            this.setLoginSts(false);
        }
    };
    Object.defineProperty(LoginService.prototype, "loginSts", {
        get: function () {
            return this.subjectVal.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.setLoginSts = function (subVal) {
        console.log('Set logged in called ' + subVal);
        this.subjectVal.next(subVal);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LoginService.prototype, "userClk", void 0);
    LoginService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map