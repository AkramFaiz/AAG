var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(messageService, loginReport, _http) {
        this.messageService = messageService;
        this.loginReport = loginReport;
        this._http = _http;
        this.userClk = new EventEmitter();
    }
    LoginComponent.prototype.addSingle = function () {
        this.messageService.add({ key: 'login', severity: 'warn', summary: 'Wrong Credentials', detail: 'Try Again' });
    };
    LoginComponent.prototype.clear = function () {
        this.messageService.clear();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('/login').subscribe(function (data) {
            _this.data1 = data;
            console.log('login:', _this.data1);
        }, function (err) {
            console.log(err.message);
        });
    };
    LoginComponent.prototype.loginClk = function () {
        var _this = this;
        this.credData = {
            username: this.username,
            password: this.password
        };
        this.loginReport.loginCall(this.credData, this.data1);
        this.loginReport.loginSts.subscribe(function (res) {
            _this.report = res;
            console.log('report: ', _this.report);
        });
        this.resp = this.report.split(',');
        if (this.resp[0] === 'true' && this.resp[1] === 'true') {
            this.data = {
                username: this.username,
                type: 'login',
                admin: true,
            };
        }
        else if (this.resp[0] === 'true' && this.resp[1] === 'false') {
            this.data = {
                username: this.username,
                type: 'login',
                admin: false,
            };
        }
        else {
            this.addSingle();
        }
        this.userAction(this.data);
    };
    LoginComponent.prototype.cancelClk = function () {
        this.data = {
            username: 'Login',
            type: 'cancel',
            admin: false
        };
        this.userAction(this.data);
    };
    LoginComponent.prototype.userAction = function (val) {
        this.userClk.emit(val);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LoginComponent.prototype, "userClk", void 0);
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: []
        }),
        __metadata("design:paramtypes", [MessageService, LoginService, HttpClient])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map